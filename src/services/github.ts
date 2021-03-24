import { json } from './api'

export function getIssues(
  owner: string,
  repository: string,
  state?: string,
  page = 1,
  perPage = 10
): Promise<any> {
  const query = `?state=${state}&page=${page}&per_page=${perPage}`
  return json(
    `https://api.github.com/repos/${owner}/${repository}/issues${query}`
  )
}
