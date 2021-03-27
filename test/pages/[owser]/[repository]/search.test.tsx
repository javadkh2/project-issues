import React from 'react'
import Home from '../../../../src/pages'
import { render } from '../../../testUtils'
import { Props } from '../../../../src/components/SearchPage'

describe('Search page', () => {
  it('matches snapshot', () => {
    const props: Props = {
      filter: 'all',
      owner: 'testOwner',
      repository: 'testRepo',
      issues: [],
    }
    const { asFragment } = render(<Home {...props} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
