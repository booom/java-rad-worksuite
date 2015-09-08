package org.javarad.utils.csv;

import org.javarad.utils.ConstVars;
import org.javarad.utils.numeric.NumericUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Introductions:
 */

public class CsvUtil {
    private static final Logger logger = LoggerFactory.getLogger(CsvUtil.class);

    private final Charset ExportCharset = StandardCharsets.UTF_16LE;//UTF_8,UTF_16LE
    private final byte[] HEADER_BOM;

    private final char ORGINAL_DIGIT_CHAR;

    private CsvUtil(){
        if(ExportCharset.equals(StandardCharsets.UTF_8)) {
            HEADER_BOM = ConstVars.WINDOWS_UTF8_BOM;
            ORGINAL_DIGIT_CHAR = ConstVars.COMMA;
        }
        else {
            HEADER_BOM = ConstVars.WINDOWS_UNICODE_BOM;
            ORGINAL_DIGIT_CHAR = ConstVars.TAB;
        }
    }

    private static class SingletonHolder{
        private static CsvUtil instance = new CsvUtil();
    }

    public static CsvUtil getInstance(){
        return SingletonHolder.instance;
    }
    
    public void exportCsv(String[] headers, Collection<List<?>> dataIterable, String filePath) {
        try(FileOutputStream fileOutputStream = new FileOutputStream(filePath,false)) {
            fileOutputStream.write(HEADER_BOM);
            try (BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(fileOutputStream, ExportCharset))) {
                StringBuilder lineBuilder = new StringBuilder();
                for (String header : headers) {
                    header = convertField(header);
                    if (lineBuilder.length() == 0)
                        lineBuilder.append(header);
                    else
                        lineBuilder.append(ConstVars.CSV_COLUMN_SPLITTER).append(header);
                }
                bufferedWriter.write(lineBuilder.toString());
                bufferedWriter.write(ConstVars.WINDOWS_LINE_SPLITTER);

                for (Collection<?> data : dataIterable) {
                    lineBuilder.delete(0, lineBuilder.length());
                    for (Object object : data) {
                        lineBuilder.append(convertField(object)).append(ConstVars.CSV_COLUMN_SPLITTER);
                    }
                    lineBuilder.deleteCharAt(lineBuilder.length()-1);

                    bufferedWriter.write(lineBuilder.toString());
                    bufferedWriter.write(ConstVars.WINDOWS_LINE_SPLITTER);
                }
            } catch (Exception ex) {
                logger.error("write csv error:filepath={},{}", filePath, ex);
            }
        }catch (Exception ex){
            logger.error("create csv file error:filepath={},{}",filePath,ex);
        }
    }

    private final Integer MAX_DIGI_LENGTH = 11;
    private String convertField(Object field){
        String cell = field==null?"":field.toString();
        cell = cell.replace(ConstVars.QUOTATION, ConstVars.QUOTATION_DOUBLE);
        if((field instanceof Number || NumericUtil.isNumericString(cell)) && cell.length()>MAX_DIGI_LENGTH && cell.indexOf('.')<0){
            cell = ORGINAL_DIGIT_CHAR+cell;//避免过长整数在excel中被格式化为小数
        }
        cell = ConstVars.QUOTATION+cell+ConstVars.QUOTATION;
//        if(cell.indexOf(COMMA) >=0 || cell.indexOf(QUOTATION) >= 0 || cell.indexOf(LF)>=0 || cell.indexOf(CR)>=0 || cell.indexOf(TAB) >=0){
//            cell = QUOTATION+cell+QUOTATION;
//        }
        return cell;
    }

    public static void main(String[] args){
        //exportCsv(String[] headers, Collection<List<?>> dataIterable, String filePath)
        String[] headers = new String[]{"header,1","header\",2"};
        List<? super Object> line = new ArrayList<>();
        line.add("content," +ConstVars.WINDOWS_LINE_SPLITTER+"1未知状态");
        line.add("11115050");

        List<List<?>> lines = new ArrayList<>();
        lines.add(line);

        line = new ArrayList<>();
        line.add("content," +ConstVars.WINDOWS_LINE_SPLITTER+"1未知状态");
        line.add("1111505011115050");
        lines.add(line);

        getInstance().exportCsv(headers,lines, "h:\\000.csv");
    }
}
