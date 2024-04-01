import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import Settings from "./Components/Settings";
import "./styles.css";

export const SettingValues = await settings.init("dev.tharki.ShowNames", defaultSettings);
export const PluginLogger = Logger.plugin("VolumeManipulator");
export const PluginInjector = new Injector();

import Injections from "./patches/index";
export const start = (): void => {
  Settings.registerSettings();
  Injections.applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
