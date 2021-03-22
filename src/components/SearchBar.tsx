import React from 'react'
import styled from 'styled-components'
import colors from '../config/colors'
type Props = {
  defaultValue?: string
  className?: string
}

const Input = styled.input`
  border-radius: 4px;
  border: solid 1px ${colors.light};
  padding: 10px;
`

export default function SearchBar({
  defaultValue,
  className,
}: Props): JSX.Element {
  return <Input defaultValue={defaultValue} className={className} />
}
