import Head from 'next/head'
import Layout from '../../../components/Layout'

type Props = {
  owner: string
  repository: string
  issueId: string
}

export const IssueDetails = ({
  owner,
  repository,
  issueId,
}: Props): JSX.Element => (
  <Layout>
    <Head>
      <title>Issue Details</title>
    </Head>

    <main>
      <h1 className="title">
        {owner}/{repository}/{issueId}
      </h1>
    </main>
  </Layout>
)

export async function getServerSideProps({
  params: { owner, repository, issueId },
}): Promise<{ props: Props }> {
  return {
    props: { owner, repository, issueId },
  }
}

export default IssueDetails