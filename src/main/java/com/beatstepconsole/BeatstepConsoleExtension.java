package com.beatstepconsole;

import com.bitwig.extension.controller.api.ControllerHost;
import com.beatstepconsole.device.BeatStepConsole;
import com.bitwig.extension.controller.ControllerExtension;

public class BeatstepConsoleExtension extends ControllerExtension
{
    protected BeatstepConsoleExtension(final BeatstepConsoleExtensionDefinition definition, final ControllerHost host)
    {
        super(definition, host);
    }

    @Override
    public void init()
    {
        final ControllerHost host = getHost();

        host.println("Initialized");

        beatStepConsole = new BeatStepConsole(host);

    }

    @Override
    public void exit()
    {
        getHost().println("beatstep-console Exited");
    }

    @Override
    public void flush()
    {
        getHost().println("flush called");
    }

    BeatStepConsole beatStepConsole;

}
