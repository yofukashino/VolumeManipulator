import Modules from "../lib/requiredModules";
import injectMenuSliderControl from "./MenuSliderControl";
import injectPreloadedUserSettings from "./PreloadedUserSettings";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectMenuSliderControl();
  injectPreloadedUserSettings();
};

export default { applyInjections };
