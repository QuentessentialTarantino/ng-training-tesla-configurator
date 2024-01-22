import { Color } from "./color";

export type Models = Model[];

type Model = {
  code: string;
  description: string;
  colors: Color[];
};
