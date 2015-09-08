package org.javarad.spider.spta;

import javafx.util.Pair;
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
import java.util.ArrayList;
import java.util.List;

/**
 * Introductions:
 */
public class SptaSpider {
    //sid:(jq.now() % 9999) + 1
    public static void main(String[] args) throws IOException {
        String sessionId = getInitSession();
        prt(sessionId);

        Pair<Long,String> listResponse = requestList("z_d0", sessionId);
        prt(listResponse.toString());

        prt(requestDetailFirst("z_d7", sessionId, listResponse.getKey()));
    }

    private static Pair<Long,String> requestList(String uuid_0, String sessionId) throws IOException {
        HttpPost httpPost = new HttpPost("http://sydw.spta.gov.cn/ksybaoming/zkau");
        httpPost.setHeaders(buildRequestHeaders(sessionId, -1));

        List<NameValuePair> nvps = new ArrayList<NameValuePair>();
        nvps.add(new BasicNameValuePair("dtid", "z__"));
        nvps.add(new BasicNameValuePair("cmd_0", "onClick"));
        nvps.add(new BasicNameValuePair("uuid_0", uuid_0));
        nvps.add(new BasicNameValuePair("data_0", "{\"pageX\":525,\"pageY\":414,\"which\":1,\"x\":150,\"y\":16}"));
        HttpEntity requestEntity = new UrlEncodedFormEntity(nvps);
        httpPost.setEntity(requestEntity);

        CloseableHttpClient httpclient = HttpClients.createDefault();
        CloseableHttpResponse response = httpclient.execute(httpPost);

        try {
            Long sid = Long.parseLong(response.getFirstHeader("ZK-SID").getValue());
            HttpEntity responseEntity = response.getEntity();
            String pageContent = EntityUtils.toString(responseEntity);
            // do something useful with the response body
            // and ensure it is fully consumed
            //消耗掉response
            Pair<Long,String> pair = new Pair<Long, String>(sid,pageContent);
            EntityUtils.consume(responseEntity);
            return pair;
        } finally {
            response.close();
        }
    }

    private static String requestDetailFirst(String uuid_0, String sessionId, long sid) throws IOException {
        HttpPost httpPost = new HttpPost("http://sydw.spta.gov.cn/ksybaoming/zkau");
        httpPost.setHeaders(buildRequestHeaders(sessionId, sid));

        List<NameValuePair> nvps = new ArrayList<NameValuePair>();
//        nvps.add(new BasicNameValuePair("", ""));
//        nvps.add(new BasicNameValuePair("", ""));
//        nvps.add(new BasicNameValuePair("", ""));
//        nvps.add(new BasicNameValuePair("", ""));
        nvps.add(new BasicNameValuePair("dtid", "z__"));
        nvps.add(new BasicNameValuePair("cmd_0", "onClick"));
        nvps.add(new BasicNameValuePair("uuid_0", uuid_0));
        nvps.add(new BasicNameValuePair("data_0", "{\"pageX\":151,\"pageY\":346,\"which\":1,\"x\":117,\"y\":6}"));
        HttpEntity requestEntity = new UrlEncodedFormEntity(nvps);
        httpPost.setEntity(requestEntity);

        CloseableHttpClient httpclient = HttpClients.createDefault();
        CloseableHttpResponse response = httpclient.execute(httpPost);

        try {
            System.out.println(response.getStatusLine());
            HttpEntity responseEntity = response.getEntity();
            String pageContent = EntityUtils.toString(responseEntity);
            // do something useful with the response body
            // and ensure it is fully consumed
            //消耗掉response
            EntityUtils.consume(responseEntity);
            return pageContent;
        } finally {
            response.close();
        }
    }

    private static Header[] buildRequestHeaders(String sessionId, long sid){
        ArrayList<Header> headers = new ArrayList<Header>();
        headers.add(new BasicHeader("Accept","*/*"));
        headers.add(new BasicHeader("Accept-Encoding","gzip, deflate"));
        headers.add(new BasicHeader("Accept-Language","zh-CN,zh;q=0.8"));
        headers.add(new BasicHeader("Connection","keep-alive"));
        headers.add(new BasicHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"));
        headers.add(new BasicHeader("Cookie",sessionId));
        headers.add(new BasicHeader("Host","sydw.spta.gov.cn"));
        headers.add(new BasicHeader("Origin","http://sydw.spta.gov.cn"));
        headers.add(new BasicHeader("Referer","http://sydw.spta.gov.cn/ksybaoming/website/online/list.zul?planId=b04072b6-5acf-4d5a-8ea5-0e772755d01a"));
        headers.add(new BasicHeader("User-Agent","Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36"));

        if(sid <= 0)
            sid = System.currentTimeMillis()%9999 + 1;
        else
            sid ++;
        headers.add(new BasicHeader("ZK-SID",String.valueOf(sid)));

        return headers.toArray(new Header[0]);
    }

    private static String getInitSession() throws IOException {
        HttpGet httpGet = new HttpGet("http://sydw.spta.gov.cn/ksybaoming/website/online/list.zul?planId=b04072b6-5acf-4d5a-8ea5-0e772755d01a");
        httpGet.setHeaders(buildCookieInitHeaders());

        CloseableHttpClient httpclient = HttpClients.createDefault();
        CloseableHttpResponse response = httpclient.execute(httpGet);
        // The underlying HTTP connection is still held by the response object
        // to allow the response content to be streamed directly from the network socket.
        // In order to ensure correct deallocation of system resources
        // the user MUST either fully consume the response content  or abort request
        // execution by calling CloseableHttpResponse#close().
        //建立的http连接，仍旧被response1保持着，允许我们从网络socket中获取返回的数据
        //为了释放资源，我们必须手动消耗掉response1或者取消连接（使用CloseableHttpResponse类的close方法）

        try {
//            prt(response.getStatusLine());
            String cookie = response.getHeaders("Set-Cookie")[0].getValue();
            return cookie.split(";")[0];
//            HttpEntity entity = response.getEntity();
            // do something useful with the response body
            // and ensure it is fully consumed
//            EntityUtils.consume(entity);
        } finally {
            response.close();
        }
    }

    private static void prt(Object obj){
        System.out.println(obj);
    }

    private static Header[] buildCookieInitHeaders(){
        ArrayList<Header> headers = new ArrayList<Header>();
        headers.add(new BasicHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"));
        headers.add(new BasicHeader("Accept-Encoding","gzip, deflate, sdch"));
        headers.add(new BasicHeader("Accept-Language","zh-CN,zh;q=0.8"));
        headers.add(new BasicHeader("Connection","keep-alive"));
        headers.add(new BasicHeader("Host","sydw.spta.gov.cn"));
        headers.add(new BasicHeader("User-Agent","Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36"));

        return headers.toArray(new Header[0]);
    }

}
