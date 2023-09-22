import { webpack } from "replugged";
import { PluginInjector } from "../index";
import { RemoteAudioSettings } from "../lib/requiredModules";
export default (): void => {
  const fnKey = webpack.getFunctionKeyBySource(RemoteAudioSettings, ".getCurrentConfig");
  PluginInjector.instead(RemoteAudioSettings, fnKey, () => {
    return false;
  });
};
