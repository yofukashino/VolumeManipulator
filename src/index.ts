import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import "./styles.css";
export const SettingValues = settings.init("dev.tharki.VolumeManipulator");
export const PluginLogger = Logger.plugin("VolumeManipulator");
export const PluginInjector = new Injector();
import Settings from "./Components/Settings";
import Injections from "./injections/index";

export const start = (): void => {
  Settings.registerSettings();
  void Injections.applyInjections().catch((err) => PluginLogger.error(err));
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
