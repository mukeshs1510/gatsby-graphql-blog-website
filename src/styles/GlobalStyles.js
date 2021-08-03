import { createGlobalStyle } from "styled-components"
import MontserratBlack from "fonts/Montserrat-Black.ttf"
import MontserratRegular from "fonts/Montserrat-Regular.ttf"

export const colors = {
  white: "#fff",
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

export const GlobalStyles = createGlobalStyle`
    :root{
        --site-max-width: 1200px;
    }
    @font-face{
        font-family: "Montserrat Ragular";
        src: local("Montserrat Regular"), local("Montserra Regular"),
        url(${MontserratRegular}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
    @font-face{
        font-family: "Montserrat Black";
        src: local("Montserrat Black"), local("Montserra Black"),
        url(${MontserratBlack}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
    body{
        background: {props => props.theme.colors.background};
        color: {props => props.theme.colors.color};
        margin: 0;
        font-family: 'Montserrat Regular', Arial, Helvetica, sans-serif;
        padding: 0 20px 80px 20px;
        transition: all 0.3s ease;
    }
    main{
        max-width: 960px;
        margin: 40px auto;
    }
    h1,h2,h3,h4,h5,h6{
        color: {props => props.theme.colors.textMain};
        font-family: 'Montserrat Black', Arial, Helvetica, sans-serif;
        transition: all 0.4s ease;
        letter-spacing: 1px;
    }
    p{
        fon-size: 0.9rem;
        line-height: 1.2;
        @media screen and (min-width: 768px) {
            font-size: 1.1rem;
            line-height: 1.5;
        }
    }
    h2{
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1.8px;
        @media screen and (min-width: 768px) {
            font-size: 1.5rem;
        }
    }
    h3{
        font-size: 0.8rem;
        letter-spacing: 1.4px;
        margin: 30px 0 -15px 0;
        @media screen and (min-width: 768px) {
            font-size: 1.2rem;
        }
    }
    a{
        text-decoration: none;
    }
    
`
