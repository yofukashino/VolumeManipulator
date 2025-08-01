import { React, classNames } from "replugged/common";
import { Text, TextInput } from "replugged/components";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
export default ({
  children,
  minValue,
  maxValue,
  value: v,
  onChange,
}: {
  children: React.ReactElement;
  minValue: number;
  maxValue: number;
  value: number;
  onChange: (e: number | string) => void;
}) => {
  const [value, setValue] = React.useState(v?.toFixed?.(0).toString());
  const [errorState, setErrorState] = React.useState(false);

  React.useEffect(() => {
    if (
      Number(value) > SettingValues.get("multiplier", defaultSettings.multiplier) * 200 ||
      (Number(value) === 0 && value !== "0")
    ) {
      setErrorState(true);
      return;
    }
    onChange(value);
    if (errorState) setErrorState(false);
  }, [value]);

  React.useEffect(() => {
    setValue(v?.toFixed?.(0).toString());
  }, [v]);

  return (
    <div>
      {children}
      <div className="volumeManipulator">
        <TextInput
          type="number"
          id="volume"
          min={minValue}
          max={maxValue}
          value={value}
          onKeyDown={(event) => event.stopPropagation()}
          onChange={(value) => {
            setValue(value);
            children.key = value;
          }}
          className={classNames("volumeManipulator-input", {
            "volumeManipulator-errorState": errorState,
          })}
          prefixElement={<Text.Eyebrow className="volumeManipulator-suffix">%</Text.Eyebrow>}
        />
      </div>
    </div>
  );
};
