loadAPI(13);

// Remove this if you want to be able to use deprecated methods without causing script to stop.
// This is useful during development.
host.setShouldFailOnDeprecatedUse(true);

host.defineController("Arturia", "Bonsole1", "1.0", "e00c3cb6-6d3d-4b00-a9cb-8ba6a9adcde8", "Simone Castellani");

host.defineMidiPorts(1, 1);

if (host.platformIsWindows()) {
    host.addDeviceNameBasedDiscoveryPair(["Arturia BeatStep"], ["Arturia BeatStep"]);
    // host.addDeviceNameBasedDiscoveryPair(["Arturia BeatStep MIDI 1"], ["Arturia BeatStep MIDI 1"]);
    // host.addDeviceNameBasedDiscoveryPair(["Arturia BeatStep 1 MIDI 1"], ["Arturia BeatStep 1 MIDI 1"]);
} else if (host.platformIsMac()) {
    // TODO: Set the correct names of the ports for auto detection on Mac OSX platform here
    // and uncomment this when port names are correct.
    // host.addDeviceNameBasedDiscoveryPair(["Input Port 0"], ["Output Port 0"]);
} else if (host.platformIsLinux()) {
    // TODO: Set the correct names of the ports for auto detection on Linux platform here
    // and uncomment this when port names are correct.
    // host.addDeviceNameBasedDiscoveryPair(["Input Port 0"], ["Output Port 0"]);
}

function init() {
    transport = host.createTransport();
    host.getMidiInPort(0).setMidiCallback(onMidi0);
    host.getMidiInPort(0).setSysexCallback(onSysex0);

    // TODO: Perform further initialization here.
    println("Bonsole1 initialized!");
}

// Called when a short MIDI message is received on MIDI input port 0.
function onMidi0(status, data1, data2) {
    // TODO: Implement your MIDI input handling code here.
    printMidi(status, data1, data2);
}

// Called when a MIDI sysex message is received on MIDI input port 0.
function onSysex0(data) {
    // MMC Transport Controls:
    switch (data) {
        default:
            printSysex(data);
    }
}

function flush() {
    // TODO: Flush any output to your controller here.
}

function exit() {

}