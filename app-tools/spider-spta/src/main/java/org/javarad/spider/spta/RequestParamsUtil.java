package org.javarad.spider.spta;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicHeader;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Introductions:
 */
public class RequestParamsUtil {
    private RequestParamsUtil(){
    }

    private static class SingletonHolder{
        private static RequestParamsUtil instance = new RequestParamsUtil();
    }
    
    public static RequestParamsUtil getInstance(){
        return SingletonHolder.instance;
    }

    public String getInitSession() throws IOException {
        HttpGet httpGet = new HttpGet(SptaConstVars.UrlInitPage);
        httpGet.setHeaders(buildCookieInitHeaders());

        CloseableHttpClient httpclient = HttpClients.createDefault();
        CloseableHttpResponse response = null;
        while (response ==null) {
            try {
                response = httpclient.execute(httpGet);
            } catch (Exception ex) {
                System.out.println("getInitSession exception " + ex.toString() + ",retry...");
            }
        }

        try {
//            prt(response.getStatusLine());
            String cookie = response.getHeaders("Set-Cookie")[0].getValue();
            EntityUtils.consume(response.getEntity());
            return cookie.split(";")[0];
        } finally {
            response.close();
        }
    }

    private Header[] buildCookieInitHeaders(){
        ArrayList<Header> headers = new ArrayList<Header>();
        headers.add(new BasicHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"));
        headers.add(new BasicHeader("Accept-Encoding","gzip, deflate, sdch"));
        headers.add(new BasicHeader("Accept-Language","zh-CN,zh;q=0.8"));
        headers.add(new BasicHeader("Connection","keep-alive"));
        headers.add(new BasicHeader("Host","sydw.spta.gov.cn"));
        headers.add(new BasicHeader("User-Agent","Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36"));

        return headers.toArray(new Header[0]);
    }

    public long getInitSid(String uuid_0, String sessionId) throws IOException {
        HttpPost httpPost = new HttpPost(SptaConstVars.UrlAction);
        httpPost.setHeaders(buildRequestHeaders(sessionId, 0));

        HttpEntity requestEntity = buildHttpEntity(uuid_0);
        httpPost.setEntity(requestEntity);

        CloseableHttpClient httpclient = HttpClients.createDefault();
        CloseableHttpResponse response = null;
        while (response ==null) {
            try {
                response = httpclient.execute(httpPost);
            } catch (Exception ex) {
                System.out.println("getInitSid exception " + ex.toString() + ",retry...");
            }
        }

        try {
            long sid = Long.parseLong(response.getFirstHeader("ZK-SID").getValue());

            HttpEntity responseEntity = response.getEntity();
            String pageContent = EntityUtils.toString(responseEntity);
            EntityUtils.consume(responseEntity);

            return sid;
        } finally {
            response.close();
        }
    }


    /**
     * @param sessionId
     * @param sid when sid<0 it'll be ignored; when sid=0 it'll be inited;when sid>0 it will ++
     * @return
     */
    public Header[] buildRequestHeaders(String sessionId, long sid){
        ArrayList<Header> headers = new ArrayList<Header>();
        headers.add(new BasicHeader("Accept", "*/*"));
        headers.add(new BasicHeader("Accept-Encoding","gzip, deflate"));
        headers.add(new BasicHeader("Accept-Language","zh-CN,zh;q=0.8"));
        headers.add(new BasicHeader("Connection","keep-alive"));
        headers.add(new BasicHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"));
        headers.add(new BasicHeader("Cookie",sessionId));
        headers.add(new BasicHeader("Host","sydw.spta.gov.cn"));
        headers.add(new BasicHeader("Origin","http://sydw.spta.gov.cn"));
        headers.add(new BasicHeader("Referer","http://sydw.spta.gov.cn/ksybaoming/website/online/list.zul?planId=b04072b6-5acf-4d5a-8ea5-0e772755d01a"));
        headers.add(new BasicHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36"));

        if(sid == 0)
            sid = System.currentTimeMillis()%9999 + 1;//sid:(jq.now() % 9999) + 1
        else if(sid>0)
            sid ++;
        //ignore sid<0
        headers.add(new BasicHeader("ZK-SID",String.valueOf(sid)));

        return headers.toArray(new Header[0]);
    }

    public HttpEntity buildHttpEntity(String uuid_0) throws UnsupportedEncodingException {
        List<NameValuePair> nvps = new ArrayList<>();
        nvps.add(new BasicNameValuePair("dtid", SptaConstVars.Dtid));
        nvps.add(new BasicNameValuePair("cmd_0", "onClick"));

        nvps.add(new BasicNameValuePair("uuid_0", uuid_0));

        Random random = new Random();
        int pageX = random.nextInt(100)+500;
        int pageY = random.nextInt(100)+400;
        int x = random.nextInt(100)+100;
        int y = random.nextInt(20);
        String data0Val = String.format("{\"pageX\":%d,\"pageY\":%d,\"which\":1,\"x\":%d,\"y\":%d}",pageX,pageY,x,y);
        nvps.add(new BasicNameValuePair("data_0", data0Val));

        return new UrlEncodedFormEntity(nvps);
    }
}
