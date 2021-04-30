// Main class

function BeatStepHardware(inputPort, outputPort, onMidi) {

    this.input = inputPort;
    this.input.setMidiCallback(onMidi);

    this.output = outputPort;

}

BeatStepHardware.prototype.initialize = function(){

    // for each element in controller
    // send proper sysEx message to se correct
    // MODE, CC Value and behaviour

    println('Initializing... ');
    this._initGlobal();
    this._initPads();
    this._initEncoders();
    this.testLed();
};

BeatStepHardware.prototype._initGlobal = function() {
    this.output.sendSysex('F0 00 20 6B 7F 42 02 00 41 04 00 F7'); // set slow encoders acceleration
    this.output.sendSysex('F0 00 20 6B 7F 42 02 00 41 03 03 F7'); // set pad velocity curve to full
}

BeatStepHardware.prototype._initMods = function() {
    for (const [key, mod] of Object.entries(MODS)) {
        modHex = uint8ToHex(mod.id);
        ccHex = uint8ToHex(mod.cc);
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 01 ${modHex} 08 F7`);       // set CC SWITCH MODE
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 02 ${modHex} 00 F7`);       // to set MIDI channel (vv: channel-1, 0-15)
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 03 ${modHex} ${ccHex} F7`); // set CC value
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 06 ${modHex} 01 F7`);       // set Gate mode
    }
}

BeatStepHardware.prototype._initPads = function() {
    for (const [key, pad] of Object.entries(PADS)) {
        padHex = uint8ToHex(pad.id);
        ccHex = uint8ToHex(pad.cc);
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 01 ${padHex} 01 F7`);       // set CC SILENT SWITCH MODE
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 02 ${padHex} 00 F7`);       // to set MIDI channel (vv: channel-1, 0-15)
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 03 ${padHex} ${ccHex} F7`); // set CC value
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 06 ${padHex} 00 F7`);       // set toggle mode
    }
}

BeatStepHardware.prototype._initEncoders = function() {
    for (const [key, encoder] of Object.entries(ENCODERS)) {
        encoderHex = uint8ToHex(encoder.id);
        ccHex = uint8ToHex(encoder.cc);
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 01 ${encoderHex} 01 F7`);         // set CC MODE
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 02 ${encoderHex} 00 F7`);         // to set MIDI channel (vv: channel-1, 0-15)
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 03 ${encoderHex} ${ccHex} F7`);   // to set the CC number that is used.
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 04 ${encoderHex} 00 F7`);         // to set the lowest possible value (Absolute mode only)
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 05 ${encoderHex} FF F7`);         // to set the highest possible value (Absolute mode only)
        this.output.sendSysex(`F0 00 20 6B 7F 42 02 00 06 ${encoderHex} 01 F7`);         // to set the behaviour: 0=Absolute, 1-3=Relative mode 1-3.
    }
}

BeatStepHardware.prototype.testLed = function() {
    for (var i = 0; i < 16; i++) {
        this.ledOn(i, 'red');
        sleep(50);
    }

    for (var i = 16; i >= 0; i--) {
        this.ledOn(i, 'blue');
        sleep(50);
    }

    for (var i = 0; i < 16; i++) {
        this.ledOn(i, 'magenta');
        sleep(50);
    }

    for (var i = 0; i < 16; i++) {
        this.ledOff(i);
        sleep(50);
    }
}

BeatStepHardware.prototype._getLedSysExMsg = function(pad, color){
    hexPad = uint8ToHex(0x70 + pad);
    hexColor = uint8ToHex(LED_COLOR[color]);
    return `F0 00 20 6B 7F 42 02 00 10 ${hexPad} ${hexColor} F7`;
};

BeatStepHardware.prototype.ledOn = function(pad, color){
    sysExMsg = this._getLedSysExMsg(pad, color)
    this.output.sendSysex(sysExMsg);
};

BeatStepHardware.prototype.ledOff = function(pad){
    sysExMsg = this._getLedSysExMsg(pad, 'black')
    this.output.sendSysex(sysExMsg);
};
