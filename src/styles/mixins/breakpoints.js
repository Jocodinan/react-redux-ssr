import { css } from 'styled-components'

const sizes = {
  xlarge: "(min-width : 1300px)",
  large: "(min-width: 1024px) and (max-width : 1300px)",
  medium: "(min-width: 768px) and (max-width:1024px)",
  small: "(max-width : 767px)"
}

const breakpoints = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media ${ sizes[label] } {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default breakpoints;