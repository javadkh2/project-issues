import styled from 'styled-components'
import { colors, size } from '../../config/style'

export const Title = styled.h2`
  margin: 0;
  margin: ${size(2)} 0;
`

export const Input = styled.input`
  border: none;
  padding: ${size(1)};
  flex: 1;
  outline: none;
  background: ${({ invalid }) => (invalid ? colors.danger : colors.white)};
  &:hover,
  &:focus {
    box-shadow: 0px 0px 1px ${colors.primary};
  }
`

export const Form = styled.form`
  color: ${colors.dark};
`

export const SearchBarWrapper = styled.div`
  display: flex;
`
export const FilterWrapper = styled.div`
  margin-top: ${size()};
  display: flex;
`
const RadioButtonLabel = styled.label`
  display: flex;
  align-items: baseline;
  margin-right: ${size(2)};
`
const RadioButtonInput = styled.input`
  margin-right: ${size(0.5)}; ;
`

type RadioButtonProps = {
  text: string
  name: string
  value: string
  checked?: boolean
  onChange?: (e) => void
}

export const RadioButton = ({
  text,
  name,
  value,
  checked,
  onChange,
}: RadioButtonProps): JSX.Element => (
  <RadioButtonLabel>
    <RadioButtonInput
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
    />
    {text}
  </RadioButtonLabel>
)
