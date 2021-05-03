package com.beatstepconsole.utility;

import java.util.ArrayList;
import java.util.List;

public class SysexUtil {

	public static String toHexString(String sub) {
		byte[] bytes = sub.getBytes();

		List<String> hexes = new ArrayList<>();
		for (byte b : bytes) {
			hexes.add(String.format("%02X", b));
		}

		return String.join(" ", hexes);
	}

	public static String uint8ToHex(int x) {
		int upper = (x >> 4) & 0xF;
		int lower = x & 0xF;
		return String.format("%x%x ", upper, lower);
	}

	public static String uint7ToHex(int x) {
		int upper = (x >> 4) & 0x7;
		int lower = x & 0xF;
		return String.format("%x%x ", upper, lower);
	}
}
