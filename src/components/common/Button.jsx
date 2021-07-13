import styled from 'styled-components'
import { basic } from '@utils/Themes'

const Button = styled.button`
  min-width: 5rem;
  min-height: 2.5rem;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font-size: large;
  border: none;
  border-radius: 0.25rem;
`

/**
 * @typedef {Object} ButtonProps
 * @property {string} text
 * @property {import("@utils/Themes").BaseTheme} theme
 * */

/**
 * @param {ButtonProps} props
 * @returns JSXElement
 * */
const Wrapped = (props) => (<Button {...props}>{props.text}</Button>)

/** @type {ButtonProps} */
Wrapped.defaultProps = {
  theme: { ...basic }
  , text: ''
}

export default Wrapped