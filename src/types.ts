export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";
export { ReactElement } from "react";
export interface GenericModule extends Record<string, DefaultTypes.AnyFunction> {}
export interface GenericExport {
  exports: GenericModule;
  id: number;
  loaded: boolean;
}
export interface GenericMemo {
  $$typeof: symbol;
  compare: DefaultTypes.AnyFunction;
  type: DefaultTypes.AnyFunction;
}

export interface DiscordComponents {
  AdvancedScrollerAuto: React.ComponentClass;
  MenuSliderControl: {
    $$typeof: symbol;
    render: DefaultTypes.AnyFunction;
  };
}
