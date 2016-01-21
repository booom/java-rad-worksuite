package org.javarad.lang.pojo;

import java.util.ArrayList;
import java.util.List;

/**
 * Introductions:
 */
public class StringList {
    private List<String> member = new ArrayList<>();

    public List<String> getMember() {
        return member;
    }

    public void setMember(List<String> member) {
        this.member = member;
    }
}
