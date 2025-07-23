import Types from "./types";
export default [
  {
    find: 'updateAsync("audioContextSettings',
    replacements: [
      {
        match: /{volume:(\w+)}/,
        replace: (_, volume: string) => `{volume:${volume} > 199 ? 199 : ${volume}}`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
