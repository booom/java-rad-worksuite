package org.javarad.utils.datastructure;

/**
 * Introductions:
 */
public class Pair <T, U> {
    private T first;
    private U second;

    public Pair() {}

    public Pair(T firstVal, U secondVal) {
        this.first = firstVal;
        this.second = secondVal;
    }

    public T getFirst() {
        return first;
    }

    public void setFirst(T firstVal) {
        this.first = firstVal;
    }

    public U getSecond() {
        return second;
    }

    public void setSecond(U secondVal) {
        this.second = secondVal;
    }
}