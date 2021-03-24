export function json(url: string, headers = {}): Promise<any> {
  return fetch(url, {
    headers: {
      accept: 'application/json',
      'User-Agent': 'project-issues-app',
      ...headers,
    },
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(new Error(res.status.toString()))
  )
}
