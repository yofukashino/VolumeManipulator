import Modules from "../lib/requiredModules";
import injectMenuSliderControl from "./MenuSliderControl";
import injectPreloadedUserSettings from "./PreloadedUserSettings";
import injectRemoteAudioContextSettings from "./RemoteAudioContextSettings";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectMenuSliderControl();
  injectPreloadedUserSettings();
  injectRemoteAudioContextSettings();
};

export default { applyInjections };
