import { createGlobalStyle } from "styled-components"
import MontserratBlack from "fonts/Montserrat-Black.ttf"
import MontserratRegular from "fonts/Montserrat-Regular.ttf"

export const Colors = {
  white: "#ffffff",
  darkGrey: "#1a1c20",
  deepDarkGrey: "#404040",
  blueShade1: "#215973",
  blueShade2: "#61adc6",
  blueShade3: "#d1e1e9",
}

export const lightTheme = {
  colors: {
    background: colors.white,
    menuBackground: colors.blueShade3,
    textDark: colors.blueShade1,
    textMain: colors.blueShade2,
    textSecondary: colors.deepDarkGrey,
  },
}

export const darkTheme = {
  colors: {
    background: colors.darkGrey,
    menuBackground: colors.blueShade1,
    textDark: colors.blueShade3,
    textMain: colors.blueShade2,
    textSecondary: colors.blueShade3,
  },
}
