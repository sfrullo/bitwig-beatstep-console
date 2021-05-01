package com.simonecastellani;
import java.util.UUID;

import com.bitwig.extension.api.PlatformType;
import com.bitwig.extension.controller.AutoDetectionMidiPortNamesList;
import com.bitwig.extension.controller.ControllerExtensionDefinition;
import com.bitwig.extension.controller.api.ControllerHost;

public class beatstepConsoleExtensionDefinition extends ControllerExtensionDefinition
{
   private static final UUID DRIVER_ID = UUID.fromString("f086e21a-c866-4f10-82ec-7bcbeae5a31b");
   
   public beatstepConsoleExtensionDefinition()
   {
   }

   @Override
   public String getName()
   {
      return "beatstep-console";
   }
   
   @Override
   public String getAuthor()
   {
      return "Simone Castellani";
   }

   @Override
   public String getVersion()
   {
      return "1.0";
   }

   @Override
   public UUID getId()
   {
      return DRIVER_ID;
   }
   
   @Override
   public String getHardwareVendor()
   {
      return "Arturia";
   }
   
   @Override
   public String getHardwareModel()
   {
      return "beatstep-console";
   }

   @Override
   public int getRequiredAPIVersion()
   {
      return 13;
   }

   @Override
   public int getNumMidiInPorts()
   {
      return 1;
   }

   @Override
   public int getNumMidiOutPorts()
   {
      return 1;
   }

   @Override
   public void listAutoDetectionMidiPortNames(final AutoDetectionMidiPortNamesList list, final PlatformType platformType)
   {
      if (platformType == PlatformType.WINDOWS)
      {
         // TODO: Set the correct names of the ports for auto detection on Windows platform here
         // and uncomment this when port names are correct.
         // list.add(new String[]{"Input Port 0"}, new String[]{"Output Port 0"});
      }
      else if (platformType == PlatformType.MAC)
      {
         // TODO: Set the correct names of the ports for auto detection on Windows platform here
         // and uncomment this when port names are correct.
         // list.add(new String[]{"Input Port 0"}, new String[]{"Output Port 0"});
      }
      else if (platformType == PlatformType.LINUX)
      {
         // TODO: Set the correct names of the ports for auto detection on Windows platform here
         // and uncomment this when port names are correct.
         // list.add(new String[]{"Input Port 0"}, new String[]{"Output Port 0"});
      }
   }

   @Override
   public beatstepConsoleExtension createInstance(final ControllerHost host)
   {
      return new beatstepConsoleExtension(this, host);
   }
}
