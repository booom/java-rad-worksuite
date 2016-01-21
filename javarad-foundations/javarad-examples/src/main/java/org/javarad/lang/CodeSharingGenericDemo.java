package org.javarad.lang;

import org.javarad.lang.pojo.IntegerList;
import org.javarad.lang.pojo.StringList;
import org.javarad.utils.reflection.BeanUtilsWrapper;

import java.util.ArrayList;
import java.util.List;

/**
 * Introductions:
 */
public class CodeSharingGenericDemo {
    public static void main(String[] args){
        List<Integer> list = new ArrayList<>();
        list.add(1);

        IntegerList integerList = new IntegerList();
        integerList.setMember(list);
        StringList stringList = BeanUtilsWrapper.createObjectCopy(integerList, StringList.class);

//        System.out.println("stringList.get(0) type="+stringList.getMember().get(0).getClass().getName());
//        System.out.println("stringList.get(0) value="+stringList.getMember().get(0));

        for(int i=0;i<stringList.getMember().size();i++){
            System.out.println("stringList " + i + "=" + stringList.getMember().get(i));
        }

    }
}
