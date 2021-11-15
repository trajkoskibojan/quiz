const colors = {
  black: "#000",
  blackLight: "rgba(0, 0, 0, 0.1)",
  red: "#f95e6d",
  redLight: "#FF87B5",
  redLightShadow: "0px 10px 4px #cb5a85",
  blackDarker: "0px 4px 15px rgba(0, 0, 0, 0.5)",
  violet: "#9C72FF",
  white: "#fff",
};

const spaces = {
  0: "0rem",
  0.5: "0.125rem",
  0.75: "0.1875rem",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  18: "4.5rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  48: "12rem",
  64: "16rem",
  128: "32rem",
};

const headers = {
  1: "5rem",
  3: "2.5rem",
};

const heights = {
  1: "8rem",
  2: "7rem",
  3: "6rem",
};

export const theme = {
  breakpoints: {
    lg: 1280,
    xl: 1800,
  },
  colors: {
    background: {
      default: colors.violet,
    },
    black: colors.black,
    blackLight: colors.blackLight,
    dangerLight: colors.redLight,
    redLight: colors.redLight,
    redLightShadow: colors.redLightShadow,
    white: colors.white,
  },
  components: {
    button: {
      normal: {
        height: "80px",
      },
    },
    header: {
      bolder: 900,
      bold: 700,
      medium: 500,
      regular: 400,
    },
    smallText: {
      fontSize: "0.625rem",
      weight: {
        regular: 400,
        medium: 500,
      },
    },
    text: {
      fontSize: "2.5rem",
      weight: {
        bolder: 900,
        bold: 700,
        medium: 500,
        regular: 400,
      },
    },
  },
  fonts: {
    size: {
      normal: "2rem",
      big: "7rem",
    },
  },
  shadow: {
    text: colors.blackDarker,
  },
  headers: {
    ...headers,
  },
  spaces: {
    ...spaces,
  },
  heights: {
    ...heights,
  },
};
