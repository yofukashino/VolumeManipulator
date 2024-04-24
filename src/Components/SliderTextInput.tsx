import { TextInput } from "replugged/components";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
export default ({
  children,
  minValue,
  maxValue,
  value,
  onChange,
}: {
  children: React.ReactElement;
  minValue: number;
  maxValue: number;
  value: number;
  onChange: (e: number | string) => void;
}) => {
  return (
    <div>
      {children}
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
            if (Number(value) > SettingValues.get("multiplier", defaultSettings.multiplier) * 200) {
              value = `${SettingValues.get("multiplier", defaultSettings.multiplier) * 200}`;
            }
            onChange(value);
          }}
        />
      </div>
    </div>
  );
};
