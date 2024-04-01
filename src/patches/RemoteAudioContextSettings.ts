import { PluginInjector } from "..";
import { RemoteAudioContextSettings } from "../lib/requiredModules";

export default (): void => {
  PluginInjector.before(
    RemoteAudioContextSettings,
    "updatePendingSettings",
    (args: [unknown, unknown, { volume: number }]) => {
      if (args?.[2]?.volume && args?.[2]?.volume > 200) args[2].volume = 200;
      return args;
    },
  );
};
