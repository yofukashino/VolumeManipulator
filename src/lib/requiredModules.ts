import { webpack } from "replugged";
import Types from "../types";

export const DiscordComponents = webpack.getByProps<Types.DiscordComponents>(
  "MenuSliderControl",
  "AdvancedScrollerAuto",
);

export const { PreloadedUserSettings } =
  webpack.getByProps<Types.SettingsPreload>("PreloadedUserSettings");

export const RemoteAudioContextSettings =
  webpack.getByProps<Types.RemoteAudioContextSettings>("updatePendingSettings");

export const MediaEngineStore = webpack.getByStoreName<Types.MediaEngineStore>("MediaEngineStore");
