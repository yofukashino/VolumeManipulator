import { Injector, Logger, settings } from "replugged";
import { DefaultSettings } from "@consts";
import Settings from "@components/Settings";
import Injections from "@Injections";

export const SettingValues = settings.init("dev.tharki.VolumeManipulator", DefaultSettings);
export const PluginLogger = Logger.plugin("VolumeManipulator", "#ffffff80");
export const PluginInjector = new Injector();

export const start = (): void => {
  Settings.registerSettings();
  void Injections.applyInjections();
};

export const stop = (): void => {
  Injections.removeInjections();
};

export { Settings } from "@components/Settings";
