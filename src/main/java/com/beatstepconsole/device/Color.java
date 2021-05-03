package com.beatstepconsole.device;

public class Color {
    public static final int BLACK   = 0x00;
    public static final int RED     = 0x01;
    public static final int BLUE    = 0x10;
    public static final int MAGENTA = 0x11;
    
    public static int[] getColorList() {
    	return new int[]{ RED, BLUE, MAGENTA, BLACK };
    }
}
