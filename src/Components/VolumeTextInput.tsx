import { React, classNames } from "replugged/common";
import { Text, TextInput } from "replugged/components";
import { SettingValues } from "@this";
import { DefaultSettings } from "@consts";

import "./VolumeTextInput.css";

export default ({
  slider,
  minValue,
  maxValue,
  value: originalValue,
  onChange,
}: {
  slider: React.ReactElement;
  minValue: number;
  maxValue: number;
  value: number;
  onChange: (e: number | string) => void;
}): React.ReactElement => {
  const [value, setValue] = React.useState(originalValue?.toFixed?.(0));
  const [errorState, setErrorState] = React.useState(false);

  React.useEffect(() => {
    if (
      Number(value) > SettingValues.get("multiplier", DefaultSettings.multiplier) * 200 ||
      (Number(value) === 0 && value !== "0")
    ) {
      setErrorState(true);
      return;
    }
    onChange(value);
    if (errorState) setErrorState(false);
  }, [value]);

  React.useEffect(() => {
    setValue(originalValue?.toFixed?.(0));
  }, [originalValue]);

  return (
    <div>
      {slider}
      <div
        className={classNames("volumeManipulator", {
          "volumeManipulator-errorState": errorState,
        })}>
        <TextInput
          className="volumeManipulator-input"
          type="number"
          inputMode="numeric"
          id="volume"
          error={errorState ? `Value Must be between ${minValue || 0} - ${maxValue}` : undefined}
          min={minValue}
          max={maxValue}
          value={value}
          onKeyDown={(event) => event.stopPropagation()}
          onChange={(value: string) => {
            setValue(value);
            slider.key = value;
          }}
          trailing={() => (
            <Text variant="eyebrow" className="volumeManipulator-suffix">
              %
            </Text>
          )}
        />
      </div>
    </div>
  );
};
