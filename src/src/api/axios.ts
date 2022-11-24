import axios from 'axios'
import { IncomingHttpHeaders } from 'http2'
import { LoginFormI } from 'src/frontend/login-form'

const axiosClient: any = axios.create()

axiosClient.defaults.baseURL = import.meta.env.VITE_API_HOST

axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': true
}

// axiosClient.defaults.withCredentials = true

interface GetI {
    route: string
    params?: object
    headers?: IncomingHttpHeaders
    needsAuth?: boolean
}

interface PostI {
    route: string
    data?: LoginFormI
    headers?: IncomingHttpHeaders
    config?: any
    needsAuth?: boolean
    resetJwtToken?: string
}


export class FetchWrapper {
    static async get({ route, params = {}, headers = {}, needsAuth = false }: GetI) {
        if (needsAuth) {
            headers['jwt'] = `${localStorage.authToken}`
        }

        try {
            const res = await axiosClient.get(route, {
                params: params,
                headers: {
                    ...headers
                }
            })

            return res
        } catch (err) {
            console.log('test err', err)
        }
    }

    static post({ route, data, headers = {}, config = {}, needsAuth = false, resetJwtToken }: PostI) {
        config = {
            ...config,
            headers: {
                ...headers
            }
        }
        if (needsAuth) {
            config = {
                ...config,
                headers: {
                    ...headers,
                    jwt: resetJwtToken ? `${resetJwtToken}` : `${localStorage.authToken}`
                }
            }
        }
        return axiosClient.post(route, data, config)
    }
}
