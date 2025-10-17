import { util } from "replugged";
import { Slider } from "replugged/components";
import { PluginLogger, SettingValues } from "@this";
import { DefaultSettings } from "@consts";

export const registerSettings = (): void => {
  type DefaultSettings = typeof DefaultSettings;
  type key = keyof DefaultSettings;
  type value = DefaultSettings[key];

  for (const key in DefaultSettings) {
    if (SettingValues.has(key as key)) return;
    PluginLogger.log(`Adding new setting ${key} with value ${DefaultSettings[key]}.`);
    SettingValues.set(key as key, DefaultSettings[key] as value);
  }
};

export const Settings = (): React.ReactElement => {
  const [multiplier, onMultiplierChange] = util.useSettingArray(
    SettingValues,
    "multiplier",
    DefaultSettings.multiplier,
  );
  return (
    <div>
      <Slider
        label="Max Volume Multiplier"
        description={`The max threshold for volume. (Default: 200, Current: ${200 * multiplier})`}
        initialValue={multiplier}
        minValue={0.5}
        maxValue={5}
        markers={[0.5, 1, 2, 2.5, 3, 4, 5]}
        stickToMarkers={true}
        onValueRender={(value) => `${value}x`}
        value={multiplier}
        onChange={onMultiplierChange}
      />
    </div>
  );
};

export default { registerSettings, Settings };
