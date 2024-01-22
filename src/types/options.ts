export type Options = {
  [modelCode: string]: {
    configs: Config[];
    towHitch: boolean;
    yoke: boolean;
  };
}

type Config = {
  id: number;
  description: string;
  range: number;
  speed: number;
  price: number;
};
