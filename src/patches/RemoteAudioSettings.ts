import { PluginInjector } from "../index";
import { RemoteAudioSettings } from "../lib/requiredModules";
export default (): void => {
  PluginInjector.instead(RemoteAudioSettings, "shouldReadWriteAudioSettings", () => {
    return false;
  });
};
