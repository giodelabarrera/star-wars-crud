const baseUrl = 'http://localhost:3306'

export enum ClientMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export type ClientOptions = {
  method?: ClientMethod
  data?: Record<string, unknown>
  headers?: Record<string, unknown>
}

export default async function client(
  endpoint: string,
  {
    method = ClientMethod.GET,
    data,
    headers: customHeaders,
    ...customConfig
  }: ClientOptions = {}
) {
  const config: Record<string, unknown> = {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders
    },
    ...customConfig
  }
  return window.fetch(`${baseUrl}/${endpoint}`, config).then(async response => {
    if (!response.ok) return Promise.reject(response)
    const data = await response.json()
    return data
  })
}
