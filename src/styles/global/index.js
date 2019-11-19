import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    font-size: ${props => props.theme.fontSizeBase};
  }

  body {
    font-family: ${props => props.theme.fontFamilyBase};
    line-height: ${props => props.theme.lineHeightBase};
    background-color: ${props => props.theme.bodyBg};
    font-size: ${props => props.theme.fontSizeBase};
    -webkit-backface-visibility: hidden;
    color: ${props => props.theme.textColor};
  }

  button {
    font-family: ${props => props.theme.fontFamilyBase};
  }

  a{
    color: ${props => props.theme.linkColor};
    text-decoration: underline;
    outline: 0 none;
    transition: all 350ms ease;
    &:hover {
      color: ${ props => props.theme.linkHoverColor };
      outline: 0 none;
      text-decoration: none;
    }
    &:focus {
      outline: 0 none;
    }
  }

  ul {
    margin-left: 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
    line-height: ${props => props.theme.lineHeightBase};
    margin-bottom: $margin;
    &:last-child {
      margin-bottom: 0;
    }
  }

  iframe{
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    color: ${ props => props.theme.titles };
    line-height: 120%;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 500;
  }

  h1 {font-size: ${ props => props.theme.h1Size };}
  h2 {font-size: ${ props => props.theme.h2Size }}
  h3 {font-size: ${ props => props.theme.h3Size }}
  h4 {font-size: ${ props => props.theme.h4Size }}
  h5 {font-size: ${ props => props.theme.h5Size }}
  h6 {font-size: ${ props => props.theme.h6Size }}
`

export default GlobalStyle;