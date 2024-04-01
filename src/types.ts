import { types } from "replugged";
import type { Store as StoreType } from "replugged/dist/renderer/modules/common/flux";

export namespace Types {
  export import DefaultTypes = types;
  export type Store = StoreType;
  export type GenericModule = Record<string, DefaultTypes.AnyFunction>;

  export interface DiscordComponents {
    AdvancedScrollerAuto: React.ComponentClass;
    MenuSliderControl: {
      $$typeof: symbol;
      render: DefaultTypes.AnyFunction;
    };
  }

  export interface SettingsPreload {
    PreloadedUserSettings: {
      defaultCheckDepth: number;
      fields: unknown[];
      optionsobject;
      typeName: string;
      binaryReadMap1: DefaultTypes.AnyFunction;
      create: DefaultTypes.AnyFunction;
      internalBinaryRead: DefaultTypes.AnyFunction;
      internalBinaryWrite: DefaultTypes.AnyFunction;
    };
  }

  export interface RemoteAudioContextSettings {
    drainPendingAudioSettings: DefaultTypes.AnyFunction;
    getPendingAudioSettings: DefaultTypes.AnyFunction;
    updatePendingSettings: DefaultTypes.AnyFunction;
  }

  export interface MediaEngineStore extends Store {
    getAecDump: DefaultTypes.AnyFunction;
    getAttenuateWhileSpeakingOthers: DefaultTypes.AnyFunction;
    getAttenuateWhileSpeakingSelf: DefaultTypes.AnyFunction;
    getAttenuation: DefaultTypes.AnyFunction;
    getAudioSubsystem: DefaultTypes.AnyFunction;
    getAutomaticGainControl: DefaultTypes.AnyFunction;
    getAv1Enabled: DefaultTypes.AnyFunction;
    getCameraComponent: DefaultTypes.AnyFunction;
    getDebugLogging: DefaultTypes.AnyFunction;
    getEchoCancellation: DefaultTypes.AnyFunction;
    getEnableSilenceWarning: DefaultTypes.AnyFunction;
    getEverSpeakingWhileMuted: DefaultTypes.AnyFunction;
    getExperimentalEncoders: DefaultTypes.AnyFunction;
    getExperimentalSoundshare: DefaultTypes.AnyFunction;
    getGoLiveContext: DefaultTypes.AnyFunction;
    getGoLiveSource: DefaultTypes.AnyFunction;
    getH265Enabled: DefaultTypes.AnyFunction;
    getHardwareH264: DefaultTypes.AnyFunction;
    getInputDetected: DefaultTypes.AnyFunction;
    getInputDeviceId: DefaultTypes.AnyFunction;
    getInputDevices: DefaultTypes.AnyFunction;
    getInputVolume: DefaultTypes.AnyFunction;
    getLocalPan: DefaultTypes.AnyFunction;
    getLocalVolume: DefaultTypes.AnyFunction;
    getLoopback: DefaultTypes.AnyFunction;
    getMediaEngine: DefaultTypes.AnyFunction;
    getMode: DefaultTypes.AnyFunction;
    getModeOptions: DefaultTypes.AnyFunction;
    getNoInputDetectedNotice: DefaultTypes.AnyFunction;
    getNoiseCancellation: DefaultTypes.AnyFunction;
    getNoiseSuppression: DefaultTypes.AnyFunction;
    getOpenH264: DefaultTypes.AnyFunction;
    getOutputDeviceId: DefaultTypes.AnyFunction;
    getOutputDevices: DefaultTypes.AnyFunction;
    getOutputVolume: DefaultTypes.AnyFunction;
    getPacketDelay: DefaultTypes.AnyFunction;
    getQoS: DefaultTypes.AnyFunction;
    getSettings: (type: string) => {
      aecDumpEnabled: boolean;
      attenuateWhileSpeakingOthers: boolean;
      attenuateWhileSpeakingSelf: boolean;
      attenuation: number;
      automaticGainControl: boolean;
      av1Enabled: boolean;
      av1EnabledSettingVersion: number;
      deaf: boolean;
      disabledLocalVideos: Record<string, boolean>;
      echoCancellation: boolean;
      experimentalEncoders: boolean;
      experimentalSoundshare2: boolean;
      h265Enabled: boolean;
      hardwareEnabledVersion: number;
      hardwareH264: boolean;
      inputDeviceId: string;
      inputVolume: number;
      localMutes: Record<string, boolean>;
      localPans: Record<string, boolean>;
      localVolumes: Record<string, number>;
      mode: string;
      modeOptions: {
        autoThreshold: boolean;
        delay: number;
        shortcut: number[][];
        threshold: number;
        vadLeading: number;
        vadTrailing: number;
        vadUseKrisp: boolean;
      };
      mute: boolean;
      ncUseKrispSettingVersion: number;
      ncUseKrispjsSettingVersion: number;
      noiseCancellation: boolean;
      noiseSuppression: boolean;
      openH264: boolean;
      outputDeviceId: string;
      outputVolume: number;
      qos: boolean;
      qosMigrated: boolean;
      silenceWarning: boolean;
      vadThrehsoldMigrated: boolean;
      vadUseKrispSettingVersion: number;
      videoDeviceId: string;
      videoHook: boolean;
      videoToggleStateMap: Record<string, string>;
    };
    getShortcuts: DefaultTypes.AnyFunction;
    getState: DefaultTypes.AnyFunction;
    getSupportedSecureFramesProtocolVersion: DefaultTypes.AnyFunction;
    getVideoComponent: DefaultTypes.AnyFunction;
    getVideoDeviceId: DefaultTypes.AnyFunction;
    getVideoDevices: DefaultTypes.AnyFunction;
    getVideoHook: DefaultTypes.AnyFunction;
    getVideoStreamParameters: DefaultTypes.AnyFunction;
    getVideoToggleState: DefaultTypes.AnyFunction;
    hasClipsSource: DefaultTypes.AnyFunction;
    hasContext: DefaultTypes.AnyFunction;
    isAdvancedVoiceActivitySupported: DefaultTypes.AnyFunction;
    isAecDumpSupported: DefaultTypes.AnyFunction;
    isAnyLocalVideoAutoDisabled: DefaultTypes.AnyFunction;
    isAutomaticGainControlSupported: DefaultTypes.AnyFunction;
    isDeaf: DefaultTypes.AnyFunction;
    isEnabled: DefaultTypes.AnyFunction;
    isExperimentalEncodersSupported: DefaultTypes.AnyFunction;
    isHardwareMute: DefaultTypes.AnyFunction;
    isInteractionRequired: DefaultTypes.AnyFunction;
    isLocalMute: DefaultTypes.AnyFunction;
    isLocalVideoAutoDisabled: DefaultTypes.AnyFunction;
    isLocalVideoDisabled: DefaultTypes.AnyFunction;
    isMediaFilterSettingLoading: DefaultTypes.AnyFunction;
    isMute: DefaultTypes.AnyFunction;
    isNativeAudioPermissionReady: DefaultTypes.AnyFunction;
    isNoiseCancellationError: DefaultTypes.AnyFunction;
    isNoiseCancellationSupported: DefaultTypes.AnyFunction;
    isNoiseSuppressionSupported: DefaultTypes.AnyFunction;
    isScreenSharing: DefaultTypes.AnyFunction;
    isSelfDeaf: DefaultTypes.AnyFunction;
    isSelfMute: DefaultTypes.AnyFunction;
    isSelfMutedTemporarily: DefaultTypes.AnyFunction;
    isSimulcastSupported: DefaultTypes.AnyFunction;
    isSoundSharing: DefaultTypes.AnyFunction;
    isSupported: DefaultTypes.AnyFunction;
    isVideoAvailable: DefaultTypes.AnyFunction;
    isVideoEnabled: DefaultTypes.AnyFunction;
    notifyMuteUnmuteSoundWasSkipped: DefaultTypes.AnyFunction;
    setCanHavePriority: DefaultTypes.AnyFunction;
    shouldSkipMuteUnmuteSound: DefaultTypes.AnyFunction;
    supports: DefaultTypes.AnyFunction;
    supportsDisableLocalVideo: DefaultTypes.AnyFunction;
    supportsExperimentalSoundshare: DefaultTypes.AnyFunction;
    supportsInApp: DefaultTypes.AnyFunction;
    supportsScreenSoundshare: DefaultTypes.AnyFunction;
    supportsVideoHook: DefaultTypes.AnyFunction;
  }
  export interface Settings {
    multiplier: number;
  }
}
export default Types;
