package com.beatstepconsole.handlers;

import com.bitwig.extension.api.util.midi.ShortMidiMessage;
import com.bitwig.extension.callback.ShortMidiDataReceivedCallback;
import com.bitwig.extension.controller.api.ControllerHost;

public class MidiHandler implements ShortMidiDataReceivedCallback {

	private ControllerHost host;

	public MidiHandler(ControllerHost host) {
		this.host = host;
	}



	@Override
	public void midiReceived(int statusByte, int data1, int data2) {
		ShortMidiMessage msg = new ShortMidiMessage(statusByte, data1, data2);
		host.println(msg.toString());	
	}

}
