package com.beatstepconsole;

import com.beatstepconsole.device.BeatStepConsole;
import com.bitwig.extension.controller.ControllerExtension;
import com.bitwig.extension.controller.api.ControllerHost;

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

        host.showPopupNotification("Initialized");

        beatStepConsole = new BeatStepConsole(host);

    }

    @Override
    public void exit()
    {
        getHost().showPopupNotification("beatstep-console Exited");
    }

    @Override
    public void flush()
    {
        // getHost().println("flush called");
    }

    BeatStepConsole beatStepConsole;

}
