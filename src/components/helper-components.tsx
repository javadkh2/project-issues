import styled from 'styled-components'
import { colors, size } from '../config/style'
import { Section } from './Layout'

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

export const SearchFormSection = styled(Section)`
  background: ${colors.ultraLight};
`

export const Part = styled.div`
  margin-top: 10px;
`

export const Anchor = styled.a`
  color: ${colors.secondary};
  text-decoration: underline;
`

export const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  &.loading {
    opacity: 0.5;
    transition: opacity 0s 0.2s;
  }
`
export const Card = styled.div`
  background: white;
  padding: 16px;
  border-radius: 4px;
  color: ${colors.dark};
`
