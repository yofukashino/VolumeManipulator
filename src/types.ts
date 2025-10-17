import { types } from "replugged";
import type * as Flux from "replugged/dist/renderer/modules/common/flux";
import type * as Design from "discord-client-types/discord_app/design/web";
import type { PreloadedUserSettings } from "@lib/RequiredModules/PreloadedUserSettings";
import type { MediaEngineStore } from "@lib/RequiredModules/MediaEngineStore";

export namespace Types {
  export import DefaultTypes = types;
  export type Store = Flux.Store;
  export interface MenuSlider {
    $$typeof: "Symbol(react.forward_ref)";
    render: Design.MenuSliderControl;
  }

  export interface Modules {
    Proxy: Exclude<Modules, "Proxy" | "loadModules">;
    loadModules?: () => Promise<void>;
    PreloadedUserSettings?: PreloadedUserSettings;
    MediaEngineStore?: MediaEngineStore;
  }
}

export default Types;
