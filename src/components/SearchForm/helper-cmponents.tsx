import styled from 'styled-components'
import { colors, size } from '../../config/style'

export const Title = styled.h2`
  margin: 0;
  margin-bottom: ${size(1)};
`

export const Input = styled.input`
  border: none;
  padding: ${size(1)};
  flex: 1;
  outline: none;
  background: ${({ invalid }) => (invalid ? colors.danger : colors.white)};
  border: solid 1px ${colors.light};
  &:hover,
  &:focus {
    border: solid 1px ${colors.primary};
  }
`

export const Form = styled.form`
  color: ${colors.dark};
  display: block;
  padding: ${size(3)};
  background: ${colors.white};
  border-radius: ${size(0.5)};
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
`

export const SearchBarWrapper = styled.div`
  display: flex;
`
export const FilterWrapper = styled.div`
  margin-top: ${size(2)};
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
      data-testid={`filter-${value}`}
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
    />
    {text}
  </RadioButtonLabel>
)
