import { webpack } from "replugged";
import type Types from "@Types";

  export interface PreloadedUserSettings {
      defaultCheckDepth: number;
      fields: unknown[];
      optionsobject;
      typeName: string;
      internalBinaryRead: (...args: unknown[]) => Partial<{ audioContextSettings: Partial<Record<"user" | "stream", { volume: number }>> }>

    };
  

const UserSettingsModule = await webpack
    .waitForModule<Record<string, PreloadedUserSettings>>(webpack.filters.bySource("PreloadedUserSettings"), {
      timeout: 10000,
    }).catch(() => {
      throw new Error("Failed To Find PreloadedUserSettings Module");
    });

export default Object.values(UserSettingsModule).find((v) => v?.typeName?.endsWith?.("PreloadedUserSettings")) as PreloadedUserSettings;
