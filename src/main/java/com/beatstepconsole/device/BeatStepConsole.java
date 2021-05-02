package com.beatstepconsole.device;

import com.beatstepconsole.handlers.MidiHandler;
import com.bitwig.extension.controller.api.ControllerHost;
import com.bitwig.extension.controller.api.HardwareSurface;
import com.bitwig.extension.controller.api.MidiIn;
import com.bitwig.extension.controller.api.MidiOut;

public class BeatStepConsole {


	static final DeviceElement MOD_START     = new DeviceElement(0X58, 0x15);
	static final DeviceElement MOD_STOP      = new DeviceElement(0X59, 0x16);
	static final DeviceElement MOD_RECALL    = new DeviceElement(0X5C, 0x19);
	static final DeviceElement MOD_STORE     = new DeviceElement(0X5D, 0x1A);
	static final DeviceElement MOD_SHIFT     = new DeviceElement(0X5E, 0x1B);
	static final DeviceElement MOD_CHAN      = new DeviceElement(0X5F, 0x1C);

	static final DeviceElement PAD_1         = new DeviceElement(0x70, 0x67);
	static final DeviceElement PAD_2         = new DeviceElement(0x71, 0x68);
	static final DeviceElement PAD_3         = new DeviceElement(0x72, 0x69);
	static final DeviceElement PAD_4         = new DeviceElement(0x73, 0x6A);
	static final DeviceElement PAD_5         = new DeviceElement(0x74, 0x6B);
	static final DeviceElement PAD_6         = new DeviceElement(0x75, 0x6C);
	static final DeviceElement PAD_7         = new DeviceElement(0x76, 0x6D);
	static final DeviceElement PAD_8         = new DeviceElement(0x77, 0x6E);
	static final DeviceElement PAD_9         = new DeviceElement(0x78, 0x6F);
	static final DeviceElement PAD_10        = new DeviceElement(0x79, 0x70);
	static final DeviceElement PAD_11        = new DeviceElement(0x7A, 0x71);
	static final DeviceElement PAD_12        = new DeviceElement(0x7B, 0x72);
	static final DeviceElement PAD_13        = new DeviceElement(0x7C, 0x73);
	static final DeviceElement PAD_14        = new DeviceElement(0x7D, 0x74);
	static final DeviceElement PAD_15        = new DeviceElement(0x7E, 0x75);
	static final DeviceElement PAD_16        = new DeviceElement(0x7F, 0x76);

	static final DeviceElement ENCODER_1        = new DeviceElement(0x20, 0x17);
	static final DeviceElement ENCODER_2        = new DeviceElement(0x21, 0x18);
	static final DeviceElement ENCODER_3        = new DeviceElement(0x22, 0X19);
	static final DeviceElement ENCODER_4        = new DeviceElement(0x23, 0X1A);
	static final DeviceElement ENCODER_5        = new DeviceElement(0x24, 0X1B);
	static final DeviceElement ENCODER_6        = new DeviceElement(0x25, 0X1C);
	static final DeviceElement ENCODER_7        = new DeviceElement(0x26, 0X1D);
	static final DeviceElement ENCODER_8        = new DeviceElement(0x27, 0X1E);
	static final DeviceElement ENCODER_9        = new DeviceElement(0x28, 0x35);
	static final DeviceElement ENCODER_10       = new DeviceElement(0x29, 0x36);
	static final DeviceElement ENCODER_11       = new DeviceElement(0x2A, 0x37);
	static final DeviceElement ENCODER_12       = new DeviceElement(0x2B, 0x38);
	static final DeviceElement ENCODER_13       = new DeviceElement(0x2C, 0x39);
	static final DeviceElement ENCODER_14       = new DeviceElement(0x2D, 0x3A);
	static final DeviceElement ENCODER_15       = new DeviceElement(0x2E, 0x3B);
	static final DeviceElement ENCODER_16       = new DeviceElement(0x2F, 0x3C);
	static final DeviceElement ENCODER_BIG      = new DeviceElement(0x30, 0x14);

	static final DeviceElement[] MODS = {
			MOD_START, MOD_STOP, MOD_RECALL,
			MOD_STORE, MOD_SHIFT, MOD_CHAN
	};

	static final DeviceElement[] PADS = {
			PAD_1, PAD_2, PAD_3, PAD_4, PAD_5, PAD_6, PAD_7, PAD_8,
			PAD_9, PAD_10, PAD_11, PAD_12, PAD_13, PAD_14, PAD_15, PAD_16
	};

	static final DeviceElement[] ENCODERS = {
			ENCODER_1, ENCODER_2, ENCODER_3, ENCODER_4, ENCODER_5, ENCODER_6, ENCODER_7, ENCODER_8,
			ENCODER_9, ENCODER_10, ENCODER_11, ENCODER_12, ENCODER_13, ENCODER_14, ENCODER_15, ENCODER_16
	};

	public BeatStepConsole(ControllerHost host) {

		final HardwareSurface surface = host.createHardwareSurface();

		final MidiIn portin = host.getMidiInPort(0);
		final MidiOut portout = host.getMidiOutPort(0);

		portin.setMidiCallback(new MidiHandler(host));

	}

}


