package org.javarad.utils.reflection;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * Introductions:
 */
public class BeanUtilsWrapper {
    private static final Logger logger = LogManager.getLogger(BeanUtilsWrapper.class);

    public static <U,V> V createObjectCopy(U source, Class<V> targetClazz){
        V target = null;
        try {
            target = targetClazz.newInstance();
            ReflectUtils.copyProperties(source,target,true);
        } catch (Exception e) {
            logger.error("", e);
        }
        return target;
    }
}
