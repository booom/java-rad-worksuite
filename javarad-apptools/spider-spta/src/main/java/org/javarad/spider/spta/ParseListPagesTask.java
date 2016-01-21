package org.javarad.spider.spta;

import org.apache.commons.io.FileUtils;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
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

    private static final Pattern RegexDetailUuid0 = Pattern.compile("zul.wgt.A','(.+?)'");
    private static final Pattern RegexActivePage = Pattern.compile("activePage\",(\\d+?)");

    private String sessionId;
    private long sid;

    @Override
    public List<String> call() throws Exception {
        if(sessionId == null) {
            sessionId = RequestParamsUtil.getInstance().getInitSession();
            sid = RequestParamsUtil.getInstance().getInitSid("z_d0", sessionId);
        }

        List<String> detailPageQueryParams = null;

        String pageContent = readListPageContent();
        if(pageContent==null || pageContent.length()==0)
           pageContent = requestListPage(sessionId, sid);
        Matcher matcherPageIndex = RegexActivePage.matcher(pageContent);
        isPageValid = false;
//        if(matcherPageIndex.find())
        {
//            int activePage = Integer.parseInt(matcherPageIndex.group(1));
//            if(activePage == page)
            {
                isPageValid = true;

                detailPageQueryParams = new ArrayList<>();
                Matcher matcherUuid0 = RegexDetailUuid0.matcher(pageContent);
                while(matcherUuid0.find()){
                    detailPageQueryParams.add(matcherUuid0.group(1));
                }
            }
        }

        return detailPageQueryParams;
    }

    private String readListPageContent() throws IOException {
        File listFile = new File(SptaConstVars.ListFilepathPrefix + page + SptaConstVars.ListFilepathSuffix);
        if(listFile.exists())
            return FileUtils.readFileToString(listFile, Charset.forName("UTF-8"));
        else
            return null;
    }

    private String requestListPage(String sessionId, long sid) throws IOException {
        HttpPost httpPost = new HttpPost(SptaConstVars.UrlAction);
        httpPost.setHeaders(RequestParamsUtil.getInstance().buildRequestHeaders(sessionId, sid));

        List<NameValuePair> nvps = new ArrayList<>();
        nvps.add(new BasicNameValuePair("dtid", SptaConstVars.Dtid));
        nvps.add(new BasicNameValuePair("cmd_0", "onPaging"));
        nvps.add(new BasicNameValuePair("uuid_0", "z_34"));
        String data_0 = String.format("{\"\":%d}", page);
        nvps.add(new BasicNameValuePair("data_0", data_0));
//        if(page==0) {
//            nvps.add(new BasicNameValuePair("cmd_0", "onClick"));
//            nvps.add(new BasicNameValuePair("uuid_0", "z_34"));
//            nvps.add(new BasicNameValuePair("data_0", "{\"pageX\":506,\"pageY\":424,\"which\":1,\"x\":131,\"y\":26}"));
//        }else if(page==1){
//            nvps.add(new BasicNameValuePair("cmd_0", "onMove"));
//            nvps.add(new BasicNameValuePair("opt_0", "i"));
//            nvps.add(new BasicNameValuePair("uuid_0", "z_v0"));
//            nvps.add(new BasicNameValuePair("data_0", "{\"left\":\"0px\",\"top\":\"0px\"}"));
//
//            nvps.add(new BasicNameValuePair("cmd_1", "onZIndex"));
//            nvps.add(new BasicNameValuePair("opt_1", "i"));
//            nvps.add(new BasicNameValuePair("uuid_1", "z_v0"));
//            nvps.add(new BasicNameValuePair("data_1", "{\"\":1800}"));
//
//            nvps.add(new BasicNameValuePair("cmd_2", "onPaging"));
//            nvps.add(new BasicNameValuePair("uuid_2", "z_42"));
//            nvps.add(new BasicNameValuePair("data_2", "{\"\":1}"));
//        }else {
//            nvps.add(new BasicNameValuePair("cmd_0", "onPaging"));
//            nvps.add(new BasicNameValuePair("uuid_0", "z_34"));
//            String data_0 = String.format("{\"\":%d}", page);
//            nvps.add(new BasicNameValuePair("data_0", data_0));
//        }

        HttpEntity requestEntity = new UrlEncodedFormEntity(nvps);
        httpPost.setEntity(requestEntity);

        CloseableHttpClient httpclient = HttpClients.createDefault();
        CloseableHttpResponse response = null;
        while (response ==null) {
            try {
                response = httpclient.execute(httpPost);
            } catch (Exception ex) {
                System.out.println("requestListPage exception " + ex.toString() + ",retry...");
            }
        }

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
