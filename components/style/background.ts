export const Backgrounds: Readonly<BackgroundGamutMap> = Object.freeze({
  base: {
    100: 'bg-base-100',
    200: 'bg-base-200'
  },
  blue: {
    100: 'bg-blue-100',
  },
  orange: {
    100: 'bg-orange-100',
  },
  purple: {
    100: 'bg-purple-100',
  },
  sky: {
    100: 'bg-sky-100',
  },
});

type BackgroundGamutMap = {
  base: BackgroundGamut;
  blue: BackgroundGamut;
  orange: BackgroundGamut;
  purple: BackgroundGamut;
  sky: BackgroundGamut;
};

type BackgroundGamut = {
  100: Background;
  200?: Background;
};

export type Background = `bg-${string}-${number}`;