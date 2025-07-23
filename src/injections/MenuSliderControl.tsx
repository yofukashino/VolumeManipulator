import { components } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import SliderTextInput from "../Components/SliderTextInput";
import Types from "../types";
export default (): void => {
  const MenuSliderControl = Object.values(components).find((c) =>
    c?.render?.toString?.()?.includes?.("slider"),
  ) as Types.DiscordComponents["MenuSliderControl"];
  PluginInjector.before(MenuSliderControl, "render", (args) => {
    if (!args[0]?.onChange?.toString?.()?.includes?.("setLocalVolume")) {
      return args;
    }
    args[0].maxValue = SettingValues.get("multiplier", defaultSettings.multiplier) * 200;
    return args;
  });
  PluginInjector.after(
    MenuSliderControl,
    "render",
    ([{ value, onChange, minValue, maxValue, ...args }], res: React.ReactElement) => {
      if (!onChange?.toString?.()?.includes?.("setLocalVolume")) {
        return res;
      }
      res.key = `${value}`;
      return (
        <SliderTextInput value={value} onChange={onChange} minValue={minValue} maxValue={maxValue}>
          {res}
        </SliderTextInput>
      );
    },
  );
};
