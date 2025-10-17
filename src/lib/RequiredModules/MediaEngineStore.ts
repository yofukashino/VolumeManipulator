import { webpack } from "replugged";
import type Types from "@Types";

export interface MediaEngineStore extends Types.Store, Record<string, unknown> {
  getSettings: (type: string) => Partial<{
    localVolumes: Record<string, number>;
  }>;
}

export default await webpack.waitForStore<MediaEngineStore>("MediaEngineStore").catch(() => {
  throw new Error("Failed To Find MediaEngineStore Module");
});
