import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from './Layout'

type Props = {
  filter?: 'all' | 'open' | 'closed'
}

// I couldn't find a way to route different urls (/all,/open,/closed) to the same result page.
// so I hade to create separate files for each path. and then exported this component from those file
export const ResultPage = ({ filter }: Props): JSX.Element => {
  const router = useRouter()
  return (
    <Layout>
      <Head>
        <title>{router.route}</title>
      </Head>

      <main>
        <h1 className="title">
          {router.route}-{filter}
        </h1>
      </main>
    </Layout>
  )
}

// because we use this fn in deferent pages so I make it a bit general by partially pass some default props to it
export const getResultPageProps = (defaultProps = {}) =>
  async function getServerSideProps(): Promise<{ props: Props }> {
    return {
      props: { ...defaultProps },
    }
  }

export default ResultPage
