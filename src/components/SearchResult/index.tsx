import Link from 'next/link'
import { Anchor, Button } from '../helper-components'
import {
  IssuesWrapper,
  IssueWrapper,
  Pagination,
  ResultTitle,
} from './helper-components'

type Props = {
  issues: any[]
  page: number
  onPaginate: (page: number) => void
  owner: string
  repository: string
}

export default function SearchResult({
  issues,
  page,
  onPaginate,
  owner,
  repository,
}: Props): JSX.Element {
  return (
    <div>
      <ResultTitle>Result</ResultTitle>
      <IssuesWrapper>
        {issues.map(({ title, id }) => (
          <IssueWrapper key={id}>
            <Link href={`/${owner}/${repository}/${id}`}>
              <Anchor href={`/${owner}/${repository}/${id}`}>{title}</Anchor>
            </Link>
          </IssueWrapper>
        ))}
      </IssuesWrapper>
      {(page != 1 || issues.length == 10) && (
        <Pagination>
          <Button
            secondary
            disabled={page == 1}
            onClick={() => {
              onPaginate(page - 1)
            }}
          >
            Prev
          </Button>
          <span>(page: {page})</span>
          <Button
            secondary
            disabled={issues.length < 10}
            onClick={() => {
              onPaginate(page + 1)
            }}
          >
            Next
          </Button>
        </Pagination>
      )}
    </div>
  )
}
