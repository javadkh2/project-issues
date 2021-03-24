import get from 'lodash/get'
import Head from 'next/head'
import Markdown from 'react-markdown'
import { Error } from '../../../components/helper-components'
import Layout from '../../../components/Layout'
import { getIssueItem } from '../../../services/github'

type Props = {
  owner: string
  repository: string
  number: string
  issue?: any
  error?: string
}

export const IssueDetails = ({
  owner,
  repository,
  number,
  issue,
  error,
}: Props): JSX.Element => (
  <Layout>
    <Head>
      <title>
        {owner}/{repository}/{number}
      </title>
    </Head>
    {error && (
      <Error align="center">Error in loading page (status-code: {error})</Error>
    )}
    {issue && (
      <main>
        <h1 className="title">{issue.title}</h1>
        <h3 className="title">
          {new Date(issue.created_at).toLocaleDateString()}
        </h3>
        <Markdown>{issue.body}</Markdown>
      </main>
    )}
  </Layout>
)

export async function getServerSideProps(context): Promise<{ props: Props }> {
  const owner = get(context, 'params.owner', '')
  const repository = get(context, 'params.repository', '')
  const number = get(context, 'params.number', '')
  try {
    const issue = await getIssueItem(owner, repository, number)
    return {
      props: { owner, repository, number, issue },
    }
  } catch (e) {
    return {
      props: { owner, repository, number, error: e.message },
    }
  }
}

export default IssueDetails
