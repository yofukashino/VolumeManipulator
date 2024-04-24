import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.PreloadedUserSettings ??= await webpack
    .waitForProps<Types.SettingsPreload>("PreloadedUserSettings")
    .then(({ PreloadedUserSettings }) => PreloadedUserSettings);
  Modules.RemoteAudioContextSettings ??=
    await webpack.waitForProps<Types.RemoteAudioContextSettings>("updatePendingSettings");
  Modules.MediaEngineStore ??= webpack.getByStoreName<Types.MediaEngineStore>("MediaEngineStore");
};

export default Modules;
