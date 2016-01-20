package cn.wemart.util;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.lang.reflect.Method;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Introductions:
 */
public class ReflectUtils {
    private static final Logger logger = LogManager.getLogger(ReflectUtils.class);

    private ReflectUtils(){
    }

    private static ConcurrentHashMap<String,Class> clazzMap = new ConcurrentHashMap<>();
    private static ConcurrentHashMap<String,Method> methodMap = new ConcurrentHashMap<>();

    public static Class getClazz(String className) throws ClassNotFoundException {
        Class clazz = clazzMap.get(className);
        if(clazz == null){
            clazz = Class.forName(className);
            clazzMap.put(className, clazz);
        }
        return clazz;
    }

    public static Method getMethod(Class clazz, String methodName, Class... args) {
        String methodMapKey = getMethodMapKey(clazz.getName(), methodName, args);
        Method method = methodMap.get(methodMapKey);
        if(method == null){
            try{
                method = clazz.getMethod(methodName, args);
            }catch (NoSuchMethodException ex){
                logger.info("{} don't hava a [{}] method", clazz.getSimpleName(), methodName);
            }
            if(method != null){
                methodMap.put(methodMapKey, method);
            }
        }
        return method;
    }

    private static String getMethodMapKey(String className,String methodName, Class... args){
        if(args==null || args.length==0){
            return className+methodName;
        }else {
            StringBuffer methodMapKey = new StringBuffer(className).append('.').append(methodName);
            for(Class clazz : args){
                methodMapKey.append('_').append(clazz.toString());
            }
            return methodMapKey.toString();
        }
    }
}