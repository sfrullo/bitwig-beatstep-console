package com.beatstepconsole.device;

public class DeviceElement {

	private int id;
	private int cc;

	public DeviceElement(int id, int cc) {
		this.setId(id);
		this.setCc(cc);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCc() {
		return cc;
	}

	public void setCc(int cc) {
		this.cc = cc;
	}
}
