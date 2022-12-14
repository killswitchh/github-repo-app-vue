export enum HTTP_METHODS {
    CONNECT = 'CONNECT',
    DELETE = 'DELETE',
    GET = 'GET',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    POST = 'POST',
    PUT = 'PUT',
    TRACE = 'TRACE',
}

export const ApiWrapper = {
    async get(url: string) {
        const response = await fetch(url, {
            method: HTTP_METHODS.GET,
            headers: this.getDefaultHeaders(),
        })
        return await this.handleError(response)
    },

    async handleError(response: any) {
        const getResponse: any = await response.json()
        if (response.status >= 400) {
            throw new Error(getResponse.message)
        }
        return getResponse
    },

    async post(url: string, body: any) {
        const response = await fetch(url, {
            method: HTTP_METHODS.POST,
            headers: this.getDefaultHeaders(),
            body: JSON.stringify(body),
        })
        return await response.json()
    },

    getDefaultHeaders(): HeadersInit | undefined {
        return { 'Content-Type': 'application/json' }
    },
}
