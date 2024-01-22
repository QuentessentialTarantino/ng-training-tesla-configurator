export type Models = Model[];

type Model = {
  code: string;
  description: string;
  colors: Color[];
};

type Color = {
  code: string;
  description: string;
  price: number;
};
