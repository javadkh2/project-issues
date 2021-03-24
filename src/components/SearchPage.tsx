import get from 'lodash/get'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getIssues } from '../services/github'
import { Filter } from '../type'
import { Error, Part } from './helper-components'
import Layout from './Layout'
import SearchForm from './SearchForm'
import SearchResult from './SearchResult'

type Props = {
  filter?: Filter
  owner?: string
  repository?: string
  issues?: any[]
  error?: string
}

// I couldn't find a way to route different urls (/all,/open,/closed) to the same result page.
// so I had to create separate files for each path. and then exported this component from those files
export const SearchPage = ({
  filter,
  owner,
  repository,
  issues = [],
  error,
}: Props): JSX.Element => {
  const router = useRouter()
  const defaultValue = owner && repository && `${owner}/${repository}`
  const page = Number.parseInt(get(router, 'query.page', '1'))
  return (
    <Layout>
      <Head>
        <title>{filter}</title>
      </Head>

      <SearchForm
        defaultValue={defaultValue}
        defaultFilter={filter}
        onSubmit={(value, filter) => {
          router.push(`/${value}/${filter}?page=1`)
        }}
      />

      {error && (
        <Part>
          <Error align="left">
            Error in fetching date (status-code: {error})
          </Error>
        </Part>
      )}

      {issues && (
        <SearchResult
          owner={owner}
          repository={repository}
          issues={issues}
          page={page}
          onPaginate={(newPage) => {
            router.push(`/${owner}/${repository}/${filter}?page=${newPage}`)
          }}
        />
      )}
    </Layout>
  )
}

// because we use this fn in deferent pages so I make it a bit general by partially apply some default props to it
export const getResultPageProps = (defaultProps: any = {}) =>
  async function getServerSideProps(context): Promise<{ props: Props }> {
    const owner = get(context, 'params.owner', '')
    const repository = get(context, 'params.repository', '')
    const page = Number.parseInt(get(context, 'query.page', '1'))
    try {
      const issues =
        owner && repository
          ? await getIssues(owner, repository, defaultProps.filter, page)
          : null
      return {
        props: { ...defaultProps, owner, repository, issues },
      }
    } catch (e) {
      return {
        props: { ...defaultProps, owner, repository, error: e.message },
      }
    }
  }

export default SearchPage
