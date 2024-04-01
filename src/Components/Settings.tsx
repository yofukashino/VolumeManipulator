import { util } from "replugged";
import { SliderItem } from "replugged/components";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Types from "../types";
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value`, defaultSettings[key]);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};

export const Settings = (): React.ReactElement => (
  <div>
    <SliderItem
      note={`The max threshold for volume. (Default: 200, Current: ${
        200 * SettingValues.get("multiplier", defaultSettings.multiplier)
      })`}
      initialValue={SettingValues.get("multiplier", defaultSettings.multiplier)}
      minValue={0.5}
      maxValue={5}
      markers={[0.5, 1, 2, 2.5, 3, 4, 5]}
      stickToMarkers={true}
      onValueRender={(value) => `${value}x`}
      {...util.useSetting(SettingValues, "multiplier", defaultSettings.multiplier)}>
      Max Volume Multiplier
    </SliderItem>
  </div>
);

export default { registerSettings, Settings };
