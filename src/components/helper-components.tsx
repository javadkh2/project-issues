import styled from 'styled-components'
import { colors, size } from '../config/style'

export const Button = styled.button`
  background: ${({ secondary }) =>
    secondary ? colors.secondary : colors.primary};
  ${({ disabled }) => disabled && 'opacity: 0.5; cursor: not-allowed;'}
  color: ${colors.white};
  border: none;
  padding: ${size()};
`

export const Error = styled.p`
  color: ${colors.primary};
  margin: 0;
  flex: 1;
  text-align: ${({ align = 'right' }) => align};
  em {
    font-style: normal;
    font-weight: bold;
  }
`

export const Part = styled.div`
  margin-top: 10px;
`

export const Anchor = styled.a`
  color: ${colors.secondary};
  text-decoration: underline;
`

export const Content = styled.div`
  &.loading {
    opacity: 0.5;
    transition: opacity 0 0.2s;
  }
`
