import { PluginInjector, PluginLogger } from "@this";
import Modules from "@lib/RequiredModules";

export const applyInjections = async (): Promise<void> => {
  try {
    await Modules.loadModules();
    await import("./MenuSliderControl");
    await import("./PreloadedUserSettings");
  } catch (err) {
    PluginLogger.error(err);
  }
};

export const removeInjections = (): void => PluginInjector.uninjectAll();

export default { applyInjections, removeInjections };
