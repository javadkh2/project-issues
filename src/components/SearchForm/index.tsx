import React, { useState } from 'react'
import { Filter } from '../../type'
import {
  FilterWrapper,
  Form,
  Input,
  RadioButton,
  SearchBarWrapper,
  Title,
} from './helper-cmponents'

import { Button, Error } from '../helper-components'

type Props = {
  defaultValue?: string
  className?: string
  defaultFilter?: Filter
  onSubmit: (value: string, filter: Filter) => void
}

function validateValue(value: string) {
  const parts = value.split('/')
  return parts.length === 2 && parts.filter(Boolean).length === 2
}

export default function SearchForm({
  defaultValue,
  className,
  defaultFilter = 'all',
  onSubmit,
}: Props): JSX.Element {
  const [filter, setFilter] = useState(defaultFilter)
  const [value, setValue] = useState(defaultValue)
  const [isValid, setIsValid] = useState(true)

  const setFilterValue = (e) => {
    setFilter(e.target.value)
    submit(value, e.target.value)
  }
  const isFilter = (f) => f === filter

  function submit(value, filter) {
    const valid = validateValue(value)
    setIsValid(valid)
    if (valid) {
      onSubmit(value, filter)
    }
  }

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        submit(value, filter)
      }}
    >
      <Title>Enter a repository name</Title>
      <SearchBarWrapper>
        <Input
          invalid={!isValid}
          type="search"
          name="search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setIsValid(true)
          }}
          className={className}
        />
        <Button type="submit">Search</Button>
      </SearchBarWrapper>
      <FilterWrapper>
        <RadioButton
          text="All"
          value="all"
          name="filter"
          onChange={setFilterValue}
          checked={isFilter('all')}
        />
        <RadioButton
          text="Open"
          value="open"
          name="filter"
          onChange={setFilterValue}
          checked={isFilter('open')}
        />
        <RadioButton
          text="Closed"
          value="closed"
          name="filter"
          onChange={setFilterValue}
          checked={isFilter('closed')}
        />
        {!isValid && (
          <Error>
            The repository should be in <em>owner/repository</em> format
          </Error>
        )}
      </FilterWrapper>
    </Form>
  )
}
