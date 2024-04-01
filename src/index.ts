import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";

import "./styles.css";

export const SettingValues = await settings.init("dev.tharki.VolumeManipulator", defaultSettings);

export const PluginLogger = Logger.plugin("VolumeManipulator");
export const PluginInjector = new Injector();

import Settings from "./Components/Settings";
import Injections from "./patches/index";

export const start = (): void => {
  Settings.registerSettings();
  Injections.applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
