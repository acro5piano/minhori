import { StorageKey, storage } from '@frontend/infra/storage'

interface RequestHeader {
  Accept: string
  'Content-Type': string
  Authorization?: string
}

interface RequestParameter {
  method: string
  body?: string
  headers: RequestHeader
}

const httpAuthorizationErrorMessages = ['token_invalid', 'unauthorized']

export class RestClient {
  prefix: string = '/api/v1'
  onHttpAuthorizationError?: () => void

  GET(url: string, params: Object = {}, headers: Object = {}) {
    return this.makeRequest(url, 'GET', params, headers)
  }

  POST(url: string, params: Object = {}, headers: Object = {}) {
    return this.makeRequest(url, 'POST', params, headers)
  }

  PUT(url: string, params: Object = {}, headers: Object = {}) {
    return this.makeRequest(url, 'PUT', params, headers)
  }

  DELETE(url: string, params: Object = {}, headers: Object = {}) {
    return this.makeRequest(url, 'DELETE', params, headers)
  }

  async makeRequest(
    url: string,
    method: string,
    params: Object = {},
    customHeaders: Object = {},
  ): Promise<any> {
    console.log(customHeaders)

    const headers: RequestHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    try {
      const token = await storage.get(StorageKey.AUTH_TOKEN)
      headers.Authorization = `Bearer ${token}`
    } catch (err) {
      headers.Authorization = ''
    }

    const request: RequestParameter = { method, headers }
    if (params) {
      if (method === 'POST' || method === 'PUT') {
        request.body = JSON.stringify(params)
      } else {
        url += '?' + this._getQueryString(params)
      }
    }

    // TODO: any
    const res = await fetch(this.buildUrl(url), request as any)

    const json = res.json()
    if (res.ok) {
      return json
    } else {
      return json.then(async (err: any) => {
        if (this.onHttpAuthorizationError && httpAuthorizationErrorMessages.includes(err.error)) {
          await this.onHttpAuthorizationError()
        }
        throw err
      })
    }
  }

  _getQueryString(params: any) {
    const esc = encodeURIComponent
    return Object.keys(params)
      .map(key => {
        if (typeof params[key] === 'object') {
          // 配列の場合
          return params[key].map((item: any) => esc(key) + esc('[]') + '=' + esc(item)).join('&')
        } else {
          return esc(key) + '=' + esc(params[key])
        }
      })
      .join('&')
  }

  buildUrl(url: string): string {
    console.log(this.prefix)
    console.log(url)
    console.log(process.env.API_URL)
    return process.env.API_URL + this.prefix + url
  }
}

export const restClient = new RestClient()
