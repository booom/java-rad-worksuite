package org.javarad.examples.apache.commons;

import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
/**
 * Introductions:
 */
public class HttpClientTest {
    public static void main(String[] args){
    }

    private static void testHttpGet() throws IOException {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet("http://targethost/homepage");
        CloseableHttpResponse response1 = httpclient.execute(httpGet);
        // The underlying HTTP connection is still held by the response object
        // to allow the response content to be streamed directly from the network socket.
        // In order to ensure correct deallocation of system resources
        // the user MUST either fully consume the response content  or abort request
        // execution by calling CloseableHttpResponse#close().
        //������http���ӣ��Ծɱ�response1�����ţ��������Ǵ�����socket�л�ȡ���ص�����
        //Ϊ���ͷ���Դ�����Ǳ����ֶ����ĵ�response1����ȡ�����ӣ�ʹ��CloseableHttpResponse���close������

        try {
            System.out.println(response1.getStatusLine());
            HttpEntity entity1 = response1.getEntity();
            // do something useful with the response body
            // and ensure it is fully consumed
            EntityUtils.consume(entity1);
        } finally {
            response1.close();
        }
    }

    private static void testHttpPost() throws IOException {
        HttpPost httpPost = new HttpPost("http://targethost/login");
        //ƴ�Ӳ���
        List <NameValuePair> nvps = new ArrayList <NameValuePair>();
        nvps.add(new BasicNameValuePair("username", "vip"));
        nvps.add(new BasicNameValuePair("password", "secret"));
        httpPost.setEntity(new UrlEncodedFormEntity(nvps));

        CloseableHttpClient httpclient = HttpClients.createDefault();
        CloseableHttpResponse response2 = httpclient.execute(httpPost);

        try {
            System.out.println(response2.getStatusLine());
            HttpEntity entity2 = response2.getEntity();
            // do something useful with the response body
            // and ensure it is fully consumed
            //���ĵ�response
            EntityUtils.consume(entity2);
        } finally {
            response2.close();
        }
    }
}
