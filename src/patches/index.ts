import patchMenuSliderControl from "./MenuSliderControl";
import patchPreloadedUserSettings from "./PreloadedUserSettings";
import patchRemoteAudioContextSettings from "./RemoteAudioContextSettings";
export const applyInjections = (): void => {
  patchMenuSliderControl();
  patchPreloadedUserSettings();
  patchRemoteAudioContextSettings();
};

export default { applyInjections };
