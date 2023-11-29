import { webpack } from "replugged";
import Types from "../types";

export const RemoteAudioSettings = webpack.getByProps<{
  shouldReadWriteAudioSettings: Types.DefaultTypes.AnyFunction;
}>("shouldReadWriteAudioSettings");

export const DiscordComponents = webpack.getByProps<Types.DiscordComponents>(
  "MenuSliderControl",
  "AdvancedScrollerAuto",
);
