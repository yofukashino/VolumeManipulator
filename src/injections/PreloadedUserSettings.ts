import { PluginInjector } from "@this";
import { PreloadedUserSettings, MediaEngineStore } from "@lib/RequiredModules";

PluginInjector.after(
  PreloadedUserSettings,
  "internalBinaryRead",
  (_args, { audioContextSettings, ...res }) => {
    const userSettings = MediaEngineStore.getSettings("default");
    const streamSettings = MediaEngineStore.getSettings("stream");

    for (const userId in audioContextSettings.user) {
      const localUserVolume = userSettings.localVolumes[userId];
      if (localUserVolume) {
        audioContextSettings.user[userId] ??= { volume: localUserVolume };
        audioContextSettings.user[userId].volume = localUserVolume;
      }
    }

    for (const userId in audioContextSettings.stream) {
      const localStreamVolume = streamSettings.localVolumes[userId];
      if (localStreamVolume > 199) {
        audioContextSettings.stream[userId] ??= { volume: localStreamVolume };
        audioContextSettings.stream[userId].volume = localStreamVolume;
      }
    }
    return { audioContextSettings, ...res };
  },
);
