import patchRemoteAudioSettings from "./RemoteAudioSettings";
import patchMenuSliderControl from "./MenuSliderControl";
export const applyInjections = (): void => {
  patchRemoteAudioSettings();
  patchMenuSliderControl();
};
