export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";
export { ReactElement } from "react";
export interface GenericModule extends Record<string, DefaultTypes.AnyFunction> {}

export interface DiscordComponents {
  AdvancedScrollerAuto: React.ComponentClass;
  MenuSliderControl: {
    $$typeof: symbol;
    render: DefaultTypes.AnyFunction;
  };
}
