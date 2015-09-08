package org.javarad.utils.numeric;

/**
 * Introductions:
 */
public class NumericUtil {
    private NumericUtil(){

    }

    public static class SingletonHolder{
        private static NumericUtil instance = new NumericUtil();
    }

    public static NumericUtil getInstance(){
        return SingletonHolder.instance;
    }

    public static boolean isNumericString(CharSequence str){
        if(str == null || str.length()==0){
            return false;
        }else {
            for(int i=0;i<str.length();i++){
                char ch = str.charAt(i);
                if((ch<'0' || ch>'9') && ch!='.' && (i!=0 || ch!='-'))
                    return false;
            }
        }
        return true;
    }
}
