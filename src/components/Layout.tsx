import styled from 'styled-components'
import { colors, size } from '../config/style'

const Layout = styled.div`
  font-family: 'Roboto';
  background: ${colors.white};
`

export const Section = styled.div`
  padding: ${size(3)};
  ${({ lightBackground }) =>
    lightBackground && `background: ${colors.ultraLight};`}
`

export default Layout
