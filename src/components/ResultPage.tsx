import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from './Layout'
import SearchForm from './SearchForm'
import get from 'lodash/get'

type Props = {
  filter?: 'all' | 'open' | 'closed'
  owner?: string
  repository?: string
}

// I couldn't find a way to route different urls (/all,/open,/closed) to the same result page.
// so I had to create separate files for each path. and then exported this component from those files
export const ResultPage = ({
  filter,
  owner,
  repository,
}: Props): JSX.Element => {
  const router = useRouter()
  const defaultValue = owner && repository && `${owner}/${repository}`
  return (
    <Layout>
      <Head>
        <title>{filter}</title>
      </Head>

      <main>
        <SearchForm
          defaultValue={defaultValue}
          defaultFilter={filter}
          onSubmit={(value, filter) => {
            router.push(`/${value}/${filter}`)
          }}
        />
      </main>
    </Layout>
  )
}

// because we use this fn in deferent pages so I make it a bit general by partially pass some default props to it
export const getResultPageProps = (defaultProps = {}) =>
  async function getServerSideProps(context): Promise<{ props: Props }> {
    const owner = get(context, 'params.owner', '')
    const repository = get(context, 'params.repository', '')
    return {
      props: { ...defaultProps, owner, repository },
    }
  }

export default ResultPage
