import get from 'lodash/get'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Markdown from 'react-markdown'
import {
  BackLink,
  Card,
  Content,
  Error,
} from '../../../components/helper-components'
import Layout, { Section } from '../../../components/Layout'
import { getIssueItem } from '../../../services/github'

type Props = {
  owner: string
  repository: string
  number: string
  issue?: any
  error?: string
  showBack: boolean
}

export const IssueDetails = ({
  owner,
  repository,
  number,
  issue,
  error,
  showBack,
}: Props): JSX.Element => {
  const router = useRouter()
  return (
    <Layout>
      <Head>
        <title>
          {owner}/{repository}/{number}
        </title>
      </Head>
      <Section lightBackground>
        <Content>
          {showBack && (
            <BackLink onClick={() => router.back()}>
              Back to search result
            </BackLink>
          )}
          <Card>
            {error && (
              <Error align="left">
                Error in loading page (status-code: {error})
              </Error>
            )}
            {!error && issue && (
              <main>
                <h1 className="title">{issue.title}</h1>
                <h3 className="title">
                  {new Date(issue.created_at).toLocaleDateString()}
                </h3>
                <Markdown>{issue.body}</Markdown>
              </main>
            )}
          </Card>
        </Content>
      </Section>
    </Layout>
  )
}

export async function getServerSideProps(context): Promise<{ props: Props }> {
  const owner = get(context, 'params.owner', '')
  const repository = get(context, 'params.repository', '')
  const number = get(context, 'params.number', '')
  // distinguish between SSR or client side rendering
  // I think there is a better way to distinguish server side rendering or client side but I didn't find it
  const showBack = context.req.url.startsWith('/_next/')
  try {
    const issue = await getIssueItem(owner, repository, number)
    return {
      props: { owner, repository, number, issue, showBack },
    }
  } catch (e) {
    return {
      props: { owner, repository, number, showBack, error: e.message },
    }
  }
}

export default IssueDetails
