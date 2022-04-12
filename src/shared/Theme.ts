type ColorToken = 'primary' | 'secondary';

type ColorTheme = {
  scheme: Record<ColorToken, string>;
};

export const pallete: Readonly<ColorTheme> = {
  scheme: {
    primary: '#10316b',
    secondary: '#0b409c'
  },
};