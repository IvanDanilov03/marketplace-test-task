export {};

declare module "@mui/material/styles" {
  // Update types for breakpoints
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
  // Update types for the palette
  interface CustomPaletteColorOptions {
    white?: string;
    dark?: string;
    primary?: string;
    green?: string;
    orange?: string;
    red?: string;
  }
  interface CustomPaletteColor {
    white: string;
    dark: string;
    primary: string;
    green: string;
    orange: string;
    red: string;
  }
  interface GreyPaletteColorOptions {
    600?: string;
    500?: string;
    400?: string;
    300?: string;
    200?: string;
    100?: string;
  }
  interface GreyPaletteColor {
    600: string;
    500: string;
    400: string;
    300: string;
    200: string;
    100: string;
  }
  interface PaletteOptions {
    custom: CustomPaletteColorOptions;
    greyPalette: GreyPaletteColorOptions;
  }
  interface Palette {
    customPalette: CustomPaletteColor;
    greyPalette: GreyPaletteColor;
  }

  // Update typography types
  interface TypographyVariants {
    textInfo: React.CSSProperties;
    textSmall: React.CSSProperties;
    textTitle: React.CSSProperties;
    textBase: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    textInfo?: React.CSSProperties;
    textSmall?: React.CSSProperties;
    textTitle?: React.CSSProperties;
    textBase?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    textInfo: true;
    textSmall: true;
    textTitle: true;
    textBase: true;
  }
}
