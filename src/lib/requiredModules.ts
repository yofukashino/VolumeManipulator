import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.PreloadedUserSettings ??= await webpack
    .waitForModule<Types.SettingsPreload>(webpack.filters.bySource("PreloadedUserSettings"), {
      timeout: 10000,
    })
    .then((mod) => Object.values(mod).find((v) => v?.typeName?.endsWith?.("PreloadedUserSettings")))
    .catch(() => {
      throw new Error("Failed To Find PreloadedUserSettings Module");
    });

  Modules.RemoteAudioContextSettings ??= await webpack
    .waitForModule<Types.RemoteAudioContextSettings>(
      webpack.filters.bySource(/let\[.,.\]=.\.split\(":"\);return\[.,.\]/),
      { timeout: 10000 },
    )
    .catch(() => {
      throw new Error("Failed To Find RemoteAudioContextSettings Module");
    });

  Modules.MediaEngineStore ??= webpack.getByStoreName<Types.MediaEngineStore>("MediaEngineStore");
};

export default Modules;
