package org.javarad.utils.datastructure;

/**
 * Introductions:
 */
public class Quadruple <T, U, V, W> {
    private T first;
    private U second;
    private V third;
    private W forth;

    public Quadruple(){
    }

    public Quadruple(T t, U u, V v, W w) {
        first = t;
        second = u;
        third = v;
        forth = w;
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

    public W getForth() {
        return forth;
    }

    public void setForth(W forth) {
        this.forth = forth;
    }
}