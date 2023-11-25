import { webpack } from "replugged";
import Types from "../types";

export const RemoteAudioSettings =
  webpack.getBySource<Types.GenericModule>("remote_audio_settings");

export const DiscordComponents = webpack.getByProps<Types.DiscordComponents>(
  "MenuSliderControl",
  "AdvancedScrollerAuto",
);
