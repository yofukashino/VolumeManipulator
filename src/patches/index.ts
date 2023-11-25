import patchRemoteAudioSettings from "./RemoteAudioSettings";
import patchMenuSliderControl from "./MenuSliderControl";
export default (): void => {
  patchRemoteAudioSettings();
  patchMenuSliderControl();
};
