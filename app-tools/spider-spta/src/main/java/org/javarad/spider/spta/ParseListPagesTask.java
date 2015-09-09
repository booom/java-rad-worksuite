package org.javarad.spider.spta;

import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Introductions:
 */
public class ParseListPagesTask implements Callable<List<String>> {
    private int page = 0;
    private boolean isPageValid = false;

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public boolean isPageValid() {
        return isPageValid;
    }

    public void setIsPageValid(boolean isPageValid) {
        this.isPageValid = isPageValid;
    }

    public ParseListPagesTask(int page) {
        this.page = page;
    }

    private static final Pattern RegexDetailUuid0 = Pattern.compile("zul.wgt.A','(.+)'");
    private static final Pattern RegexActivePage = Pattern.compile("activePage\",(\\d+)");

    @Override
    public List<String> call() throws Exception {
        String sessionId = RequestParamsUtil.getInstance().getInitSession();
        long sid = RequestParamsUtil.getInstance().getInitSid("z_d0", sessionId);

        List<String> detailPageQueryParams = null;

        String pageContent = requestListPage(sessionId, sid);
        Matcher matcherPageIndex = RegexActivePage.matcher(pageContent);
        isPageValid = false;
        if(matcherPageIndex.find()){
            int activePage = Integer.parseInt(matcherPageIndex.group(1));
            if(activePage == page){
                isPageValid = true;

                detailPageQueryParams = new ArrayList<>();
                Matcher matcherUuid0 = RegexDetailUuid0.matcher(pageContent);
                while(matcherUuid0.find()){
                    detailPageQueryParams.add(matcherUuid0.group(1));
                    System.out.println(matcherUuid0.group(1));
                }
            }
        }

        return detailPageQueryParams;
    }

    private String requestListPage(String sessionId, long sid) throws IOException {
        HttpPost httpPost = new HttpPost(SptaConstVars.UrlAction);
        httpPost.setHeaders(RequestParamsUtil.getInstance().buildRequestHeaders(sessionId, sid));

        List<NameValuePair> nvps = new ArrayList<>();
        nvps.add(new BasicNameValuePair("dtid", SptaConstVars.Dtid));
        nvps.add(new BasicNameValuePair("cmd_0", "onPaging"));
        nvps.add(new BasicNameValuePair("uuid_0", "z_42"));
        String data_0 = String.format("{\"\":%d}",page);
        nvps.add(new BasicNameValuePair("data_0", data_0));

        HttpEntity requestEntity = new UrlEncodedFormEntity(nvps);
        httpPost.setEntity(requestEntity);

        CloseableHttpClient httpclient = HttpClients.createDefault();
        CloseableHttpResponse response = httpclient.execute(httpPost);

        try {
//            System.out.println(response.getStatusLine());
            HttpEntity responseEntity = response.getEntity();
            String pageContent = EntityUtils.toString(responseEntity);

            EntityUtils.consume(responseEntity);

            return pageContent;
        } finally {
            response.close();
        }
    }
}
