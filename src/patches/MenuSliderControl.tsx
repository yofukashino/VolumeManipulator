import { components } from "replugged";
import { PluginInjector } from "../index";
import { DiscordComponents } from "../lib/requiredModules";
const { TextInput } = components;
export default (): void => {
  PluginInjector.before(DiscordComponents.MenuSliderControl, "render", (args) => {
    if (!args[0]?.onChange?.toString?.()?.includes?.("setLocalVolume")) {
      return args;
    }
    args[0].maxValue = 1000;
    return args;
  });
  PluginInjector.after(
    DiscordComponents.MenuSliderControl,
    "render",
    (args, res: React.ReactElement) => {
      if (!args[0]?.onChange?.toString?.()?.includes?.("setLocalVolume")) {
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
              min={args[0].minValue}
              max={args[0].maxValue}
              value={args[0].value.toFixed(0)}
              onKeyDown={(event) => event.stopPropagation()}
              onChange={(...innerArgs) => {
                if (Number(innerArgs[0]) > 1000) {
                  innerArgs[0] = "1000";
                }
                args[0].onChange(...innerArgs);
              }}
            />
          </div>
        </div>
      );
    },
  );
};
