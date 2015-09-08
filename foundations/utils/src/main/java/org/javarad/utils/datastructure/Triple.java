package org.javarad.utils.datastructure;

/**
 * Introductions:
 */
public class Triple <T, U, V> {
    private T first;
    private U second;
    private V third;

    public Triple(){
    }

    public Triple(T t, U u, V v) {
        first = t;
        second = u;
        third = v;
    }

    public T getFirst() {
        return first;
    }

    public void setFirst(T first) {
        this.first = first;
    }

    public U getSecond() {
        return second;
    }

    public void setSecond(U second) {
        this.second = second;
    }

    public V getThird() {
        return third;
    }

    public void setThird(V third) {
        this.third = third;
    }
}