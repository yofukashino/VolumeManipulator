import { webpack } from "replugged";
import { components } from "replugged/common";
import { PluginInjector, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import VolumeTextInput from "@components/VolumeTextInput";
import type Types from "@Types";

const MenuSliderControl = webpack.getComponentBySource<Types.MenuSlider>(components, "slider");

PluginInjector.before(MenuSliderControl, "render", (args) => {
  const [{ onChange }] = args;
  if (!onChange?.toString?.()?.includes?.("setLocalVolume")) return args;
  args[0].maxValue = SettingValues.get("multiplier", DefaultSettings.multiplier) * 200;
  return args;
});

PluginInjector.after(
  MenuSliderControl,
  "render",
  ([{ value, onChange, minValue, maxValue }], res: React.ReactElement) => {
    if (!onChange?.toString?.()?.includes?.("setLocalVolume")) return res;
    return (
      <VolumeTextInput
        value={value}
        onChange={onChange}
        minValue={minValue}
        maxValue={maxValue}
        slider={res}
      />
    );
  },
);
