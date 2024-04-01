import { TextInput } from "replugged/components";
import { PluginInjector, SettingValues } from "../index";
import { DiscordComponents } from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
export default (): void => {
  PluginInjector.before(DiscordComponents.MenuSliderControl, "render", (args) => {
    if (!args[0]?.onChange?.toString?.()?.includes?.("setLocalVolume")) {
      return args;
    }
    args[0].maxValue = SettingValues.get("multiplier", defaultSettings.multiplier) * 200;
    return args;
  });
  PluginInjector.after(
    DiscordComponents.MenuSliderControl,
    "render",
    ([{ value, onChange, minValue, maxValue }], res: React.ReactElement) => {
      if (!onChange?.toString?.()?.includes?.("setLocalVolume")) {
        return res;
      }
      return (
        <div>
          {res}
          <div className={"volumeManipulator"}>
            <TextInput
              type={"number"}
              id={"volume"}
              size={TextInput.Sizes.MINI}
              min={minValue}
              max={maxValue}
              value={value?.toFixed?.(0)}
              onKeyDown={(event) => event.stopPropagation()}
              onChange={(value) => {
                if (
                  Number(value) >
                  SettingValues.get("multiplier", defaultSettings.multiplier) * 200
                ) {
                  value = `${SettingValues.get("multiplier", defaultSettings.multiplier) * 200}`;
                }
                onChange(value);
              }}
            />
          </div>
        </div>
      );
    },
  );
};
