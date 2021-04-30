loadAPI(13);
load('BeatStepHardware.js');
load('BeatStepConsts.js');
load('BeatStepUtility.js');

host.setShouldFailOnDeprecatedUse(true);
host.defineController("Arturia", "Bonsole1", "1.0", "e00c3cb6-6d3d-4b00-a9cb-8ba6a9adcde8", "Simone Castellani");
host.defineMidiPorts(1, 1);

if (host.platformIsWindows()) {
    host.addDeviceNameBasedDiscoveryPair(["Arturia BeatStep"], ["Arturia BeatStep"]);
} else if (host.platformIsMac()) {
    // TODO: Set the correct names of the ports for auto detection on Mac OSX platform here
} else if (host.platformIsLinux()) {
    // TODO: Set the correct names of the ports for auto detection on Linux platform here
}

function init() {

    var beatstep = new BeatStepHardware(
        host.getMidiInPort(0),
        host.getMidiOutPort(0),
        onMidi
    );

    beatstep.initialize();

    // TODO: Perform further initialization here.
    println("Bonsole1 initialized!");
}

// Called when a short MIDI message is received on MIDI input port 0.
function onMidi(status, data1, data2) {
    // TODO: Implement your MIDI input handling code here.
    printMidi(status, data1, data2);
}

function flush() {
    // TODO: Flush any output to your controller here.
}

function exit() {

}