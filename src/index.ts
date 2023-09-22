import { Injector, Logger } from "replugged";
import "./styles.css";

export const PluginLogger = Logger.plugin("VolumeManipulator");
export const PluginInjector = new Injector();

import { applyInjections } from "./patches/index";
export const start = (): void => {
  applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};
