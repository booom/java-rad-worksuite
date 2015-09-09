package org.javarad.spider.spta;

import org.javarad.utils.csv.CsvUtil;
import org.joda.time.DateTime;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Introductions:
 */
public class SptaSpider {
    public static void main(String[] args) throws Exception {
        List<String> allPageQueryParams = new ArrayList<>(3000);
        ParseListPagesTask parseListPagesTask = new ParseListPagesTask(0);
        List<String> pageQueryParams = parseListPagesTask.call();
        while (parseListPagesTask.isPageValid()){
            if(pageQueryParams!=null && !pageQueryParams.isEmpty() && !allPageQueryParams.contains(pageQueryParams.get(0))) {
                allPageQueryParams.addAll(pageQueryParams);
                parseListPagesTask.setPage(parseListPagesTask.getPage() + 1);
                pageQueryParams = parseListPagesTask.call();
            }else {
                break;
            }
        }

        Collection<List<?>> datas = new ArrayList<>();
        ParseDetailPagesTask parseDetailPagesTask = new ParseDetailPagesTask();
        for(String uuid0 : allPageQueryParams){
            parseDetailPagesTask.setUuid0(uuid0);
            List<String> data = parseDetailPagesTask.call();
            datas.add(data);
        }

        String[] csvHeaders = new String[]{"岗位","招录人数","所属区划","主管单位","用人单位","岗位简介","招聘对象","最低工作年限","政治面貌","年龄上限","学历要求","学位要求","户籍要求","面试比例","最低合格分数线","笔试面试成绩比例","专业要求","其它条件","备注"};

        DateTime now = new DateTime();
        CsvUtil.getInstance().exportCsv(csvHeaders, datas, SptaConstVars.OutputFilepathPrefix + now.toString("MMddHHmmss") + ".csv");
    }

    private static void prt(Object obj){
        System.out.println(obj);
    }
}
