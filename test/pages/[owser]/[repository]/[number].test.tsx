import React from 'react'
import IssueDetails from '../../../../src/pages/[owner]/[repository]/[number]'
import { render } from '@testing-library/react'

describe('Issue page', () => {
  it('should render an issue', () => {
    const props = {
      owner: 'testOwner',
      repository: 'testRepo',
      number: '1',
      issue: {
        title: 'testTitle',
        created_at: '2021-01-01T00:00:00.000Z',
        body: 'issue body',
      },
      error: undefined,
      showBack: false,
    }
    const { getByText } = render(<IssueDetails {...props} />, {})
    expect(getByText(props.issue.title)).toBeTruthy()
    expect(getByText(props.issue.body)).toBeTruthy()
    expect(
      getByText(new Date(props.issue.created_at).toLocaleDateString())
    ).toBeTruthy()
  })
})
