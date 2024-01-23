import { Config } from "./config";

export type Options = {
  [modelCode: string]: {
    configs: Config[];
    towHitch: boolean;
    yoke: boolean;
  };
}
