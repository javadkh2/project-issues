import styled from 'styled-components'
import { colors, size } from '../../config/style'

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const IssuesWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: ${size(2)};
`

export const IssueWrapper = styled.li`
  margin-bottom: ${size()};
  padding: ${size()};
  background: ${colors.white};
  border-radius: ${size(0.5)};
`
export const ResultTitle = styled.h3`
  margin: ${size(2)} 0;
`
