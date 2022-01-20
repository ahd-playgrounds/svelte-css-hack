export type PartialStyles = DeepPartial<Styles>;

interface Styles {
  theme: {
    p: {
      base: {
      'font-size': CSSProperty;
      'font-weight': CSSProperty;
      'color': CSSColor;
      },
      ':hover': {
        'color': CSSColor;
      }
    }
  },
  overrides: {
    homepage: {
      greeting: {
        p: {
          base: {
            'font-size': CSSProperty;
            'font-weight': CSSProperty;
            'color': CSSColor;
          },
          ':hover': {
            'color': CSSColor;
          }
        }
      }
    }
  }
}

type CSSProperty = string;
type CSSColor = string;

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
