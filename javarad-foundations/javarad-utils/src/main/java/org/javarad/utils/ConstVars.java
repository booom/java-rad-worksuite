package org.javarad.utils;

/**
 * Introductions:
 */
public class ConstVars {
    public static final byte[] WINDOWS_UTF8_BOM = new byte[]{(byte)0xEF,(byte)0xBB,(byte)0xBF};
    public static final byte[] WINDOWS_UNICODE_BOM = new byte[]{(byte)0xFF,(byte)0xFE};

    public static final String QUOTATION = "\"";
    public static final String QUOTATION_DOUBLE = "\"\"";

    public static final char LF = '\n';
    public static final char CR = '\r';

    public static final char COMMA = ',';
    public static final char TAB = '\t';

    public static final char CSV_COLUMN_SPLITTER = TAB;
    public static final String WINDOWS_LINE_SPLITTER = "\r\n";
}
