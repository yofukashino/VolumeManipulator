import { PluginInjector } from "..";
import Modules from "../lib/requiredModules";

export default (): void => {
  const { PreloadedUserSettings, MediaEngineStore } = Modules;
  PluginInjector.after(
    PreloadedUserSettings,
    "internalBinaryRead",
    (_args, res: { audioContextSettings: Record<"user" | "stream", { volume: number }> }) => {
      const { audioContextSettings } = res;
      const userSettings = MediaEngineStore.getSettings("default");
      const streamSettings = MediaEngineStore.getSettings("stream");
      for (const userId in audioContextSettings.user) {
        if (userSettings.localVolumes[userId] > 200) {
          audioContextSettings.user[userId] ??= {};
          audioContextSettings.user[userId].volume = userSettings.localVolumes[userId];
        }
      }
      for (const userId in audioContextSettings.stream) {
        if (streamSettings.localVolumes[userId] > 199) {
          audioContextSettings.stream[userId] ??= {};
          audioContextSettings.stream[userId].volume = streamSettings.localVolumes[userId];
        }
      }
      return res;
    },
  );
};
