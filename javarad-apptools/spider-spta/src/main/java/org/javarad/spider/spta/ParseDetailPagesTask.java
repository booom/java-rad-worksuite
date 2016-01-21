package org.javarad.spider.spta;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
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
public class ParseDetailPagesTask implements Callable<List<String>> {
    private String uuid0;

    public String getUuid0() {
        return uuid0;
    }

    public void setUuid0(String uuid0) {
        this.uuid0 = uuid0;
    }

    public ParseDetailPagesTask(String uuid0) {
        this.uuid0 = uuid0;
    }

    public ParseDetailPagesTask() {
    }

    private static final Pattern RegexStation = Pattern.compile("toptip_black blue',value:'(.+?)'");//岗位，如“培训教育”
    private static final Pattern RegexRecruitAmount = Pattern.compile("font_b blue',value:'(\\d+?)'");//招录：1 名
    private static final Pattern RegexBelongAndDepartmentAndEmployer = Pattern.compile("font_b',value:'(.+?)'");//所属区划：市属；主管单位：上海市安全生产监督管理局；用人单位：上海市安全生产科学研究所
//    private static final Pattern RegexDepartment = Pattern.compile("font_b',value:'(.+)'");//主管单位：上海市安全生产监督管理局
//    private static final Pattern RegexEmployer = Pattern.compile("font_b',value:'(.+)'");//用人单位：上海市安全生产科学研究所
    private static final Pattern RegexIntro = Pattern.compile("content:'(.+?)'");//岗位简介：负责安全生产师资力量的教育培训，协助教材的策划编辑工作。
    private static final Pattern RegexRecruitment = Pattern.compile("招聘对象\\uff1a(.+?)<br/>");//招聘对象：非应届毕业生
    private static final Pattern RegexCareerYears = Pattern.compile("最低工作年限\\uff1a(.+?)<br/>");//最低工作年限：三年
    private static final Pattern RegexPoliticalStatus = Pattern.compile("政治面貌\\uff1a(.+?)<br/>");//政治面貌：不限
    private static final Pattern RegexUpperAgeLimit = Pattern.compile("年龄上限\\uff1a(.+?)<br/>");//年龄上限：45
    private static final Pattern RegexEducation = Pattern.compile("学历要求\\uff1a(.+?)<br/>");//学历要求：本科及以上
    private static final Pattern RegexDegree = Pattern.compile("学位要求\\uff1a(.+?)<br/>");//学位要求：学士及以上
    private static final Pattern RegexRegistration = Pattern.compile("户籍要求\\uff1a(.+?)<br/>");//户籍要求：不限
    private static final Pattern RegexInterviewProportion = Pattern.compile("面试比例\\uff1a(.+?)<br/>");//面试比例：1:5
    private static final Pattern RegexLowerScoreLimit = Pattern.compile("最低合格分数线\\uff1a(.+?)<br/>");//最低合格分数线：不限
    private static final Pattern RegexScoreProportion = Pattern.compile("笔试面试成绩比例\\uff1a(.+?)<br/>");//笔试面试成绩比例：4:6
    private static final Pattern RegexMajor = Pattern.compile("专业要求\\uff1a(.+?)<br/>");//专业要求：安全工程优先
    private static final Pattern RegexOtherRequirement = Pattern.compile("其它条件\\uff1a(.+?)<br/>");//其它条件：具有相关工作经历者优先.
    private static final Pattern RegexRemark = Pattern.compile("备注\\uff1a(.+?)<br/>");//备注：本岗位工作资历要求，必须有劳动（聘用）合同佐证，并有相关社保缴费记录。

    @Override
    public List<String> call() throws Exception {
        String sessionId = RequestParamsUtil.getInstance().getInitSession();
        long sid = RequestParamsUtil.getInstance().getInitSid("z_d0", sessionId);
        String pageContent = requestDetail(uuid0, sessionId, sid);

        List<String> content = new ArrayList<>();
        content.add(getMatch(pageContent, 1, 1, RegexStation));
        content.add(getMatch(pageContent, 1, 1, RegexRecruitAmount));
        content.add(getMatch(pageContent, 1, 1, RegexBelongAndDepartmentAndEmployer));
        content.add(getMatch(pageContent, 1, 2, RegexBelongAndDepartmentAndEmployer));
        content.add(getMatch(pageContent, 1, 3, RegexBelongAndDepartmentAndEmployer));
        content.add(getMatch(pageContent, 1, 1, RegexIntro));
        content.add(getMatch(pageContent, 1, 1, RegexRecruitment));
        content.add(getMatch(pageContent, 1, 1, RegexCareerYears));
        content.add(getMatch(pageContent, 1, 1, RegexPoliticalStatus));
        content.add(getMatch(pageContent, 1, 1, RegexUpperAgeLimit));
        content.add(getMatch(pageContent, 1, 1, RegexEducation));
        content.add(getMatch(pageContent, 1, 1, RegexDegree));
        content.add(getMatch(pageContent, 1, 1, RegexRegistration));
        content.add(getMatch(pageContent, 1, 1, RegexInterviewProportion));
        content.add(getMatch(pageContent, 1, 1, RegexLowerScoreLimit));
        content.add(getMatch(pageContent, 1, 1, RegexScoreProportion));
        content.add(getMatch(pageContent, 1, 1, RegexMajor));
        content.add(getMatch(pageContent, 1, 1, RegexOtherRequirement));
        content.add(getMatch(pageContent, 1, 1, RegexRemark));

        return content;
    }

    private String getMatch(String pageContent,int groupIdx, int matchIdx, Pattern regex) {
        Matcher matcher = regex.matcher(pageContent);
        int idx = 1;
        String matchStr = "";
        while (matcher.find()){
            if(idx==matchIdx) {
                matchStr = matcher.group(groupIdx);
                System.out.println(matchStr);
                break;
            }
            idx++;
        }

        return matchStr;
    }

    private String requestDetail(String uuid_0, String sessionId, long sid) throws IOException {
//        uuid_0 = "z_d7";
        System.out.println("request detail page:uuid_0=" + uuid_0);
        HttpPost httpPost = new HttpPost(SptaConstVars.UrlAction);
        httpPost.setHeaders(RequestParamsUtil.getInstance().buildRequestHeaders(sessionId, sid));

        HttpEntity requestEntity = RequestParamsUtil.getInstance().buildHttpEntity(uuid_0);
        httpPost.setEntity(requestEntity);

        CloseableHttpClient httpclient = HttpClients.createDefault();
        CloseableHttpResponse response = null;
        while (response == null) {
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
