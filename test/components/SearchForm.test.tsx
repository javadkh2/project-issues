import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import SearchForm, { Props } from '../../src/components/SearchForm'

describe('Search from', () => {
  it('should update the input value when user types', () => {
    const props: Props = {
      defaultValue: 'test',
      defaultFilter: 'all',
      onSubmit: jest.fn((a) => a),
    }
    const { getByTestId } = render(<SearchForm {...props} />)

    const input = getByTestId('search-input') as HTMLInputElement

    expect(input.value).toBe('test')

    fireEvent.change(input, { target: { value: 'project/repo' } })

    expect(input.value).toBe('project/repo')
  })

  it('should update the filter when user change it', () => {
    const props: Props = {
      defaultValue: 'test',
      defaultFilter: 'all',
      onSubmit: jest.fn((a) => a),
    }
    const { getByTestId } = render(<SearchForm {...props} />)

    const open = getByTestId('filter-open') as HTMLInputElement

    expect(open.checked).toBeFalsy()

    fireEvent.click(open)

    expect(open.checked).toBeTruthy()
  })

  it('should call onSubmit when submitting form', () => {
    const props: Props & { onSubmit: any } = {
      defaultValue: 'test',
      defaultFilter: 'all',
      onSubmit: jest.fn((a) => a),
    }
    const { getByTestId } = render(<SearchForm {...props} />)

    const open = getByTestId('filter-open') as HTMLInputElement

    fireEvent.click(open)

    const input = getByTestId('search-input') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'project/repo' } })

    const form = getByTestId('search-form') as HTMLFormElement

    fireEvent.submit(form)

    expect(props.onSubmit.mock.calls).toHaveLength(1)
    expect(props.onSubmit.mock.calls[0]).toEqual(['project/repo', 'open'])
  })
})
