import styled from 'styled-components'
import { colors, size } from '../config/style'

const Layout = styled.div`
  font-family: 'Roboto';
  max-width: 800px;
  margin: 0 auto;
  background: ${colors.ultraLight};
  padding: ${size()};
`

export default Layout
