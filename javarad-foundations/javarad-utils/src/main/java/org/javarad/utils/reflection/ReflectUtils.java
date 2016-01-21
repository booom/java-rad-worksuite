package org.javarad.utils.reflection;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.beans.BeanInfo;
import java.beans.IntrospectionException;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Introductions:
 */
public class ReflectUtils {
    private static final Logger logger = LogManager.getLogger();

    private ReflectUtils(){
    }

    private static ConcurrentHashMap<String,Class> clazzMap = new ConcurrentHashMap<>();
    private static ConcurrentHashMap<String,Method> methodMap = new ConcurrentHashMap<>();

    private static ConcurrentHashMap<String,PropertyDescriptor[]> propertiesMap = new ConcurrentHashMap<>();
    private static ConcurrentHashMap<String,Method> writeMethodMap = new ConcurrentHashMap<>();

    public static void copyProperties(Object source, Object dest, boolean ignoreNull) throws IntrospectionException, IllegalArgumentException, IllegalAccessException,
            InvocationTargetException {
        PropertyDescriptor[] sourcePdList = getPropertyDescriptors(source.getClass());
        if(sourcePdList != null) {
            for (PropertyDescriptor pd : sourcePdList) {
                Method readMethod = null;
                try {
                    readMethod = pd.getReadMethod();
                } catch (Exception e) {
                }

                Method writeMethod = getWriteMethod(dest.getClass(), pd.getName());
                if (readMethod == null || writeMethod==null || !readMethod.getReturnType().equals(writeMethod.getParameterTypes()[0])) {
                    continue;
                }

                Object val = readMethod.invoke(source);
                if (val != null || !ignoreNull) {
                    writeMethod.invoke(dest, val);
                }
            }
        }
    }

    public static Method getWriteMethod(Class destClazz, String pdName) throws IntrospectionException {
        String key = destClazz.getName()+pdName.toLowerCase();
        Method writeMethod = writeMethodMap.get(key);
        if(writeMethod == null){
            PropertyDescriptor[] destPdList = getPropertyDescriptors(destClazz);
            if(destPdList != null){
                for (PropertyDescriptor pd : destPdList) {
                    Method write = pd.getWriteMethod();
                    if(write != null)
                        writeMethodMap.put(destClazz.getName()+pd.getName().toLowerCase(), write);
                }
                writeMethod = writeMethodMap.get(key);
            }
        }
        return writeMethod;
    }

    public static PropertyDescriptor[] getPropertyDescriptors(Class sourceClazz) throws IntrospectionException {
        String mapKey = sourceClazz.getName();
        PropertyDescriptor[] getPdList = propertiesMap.get(mapKey);
        if(getPdList == null) {
            BeanInfo beanInfo = Introspector.getBeanInfo(sourceClazz);
            getPdList = beanInfo.getPropertyDescriptors();
            propertiesMap.put(mapKey, getPdList);
        }
        return getPdList;
    }

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
    }}
