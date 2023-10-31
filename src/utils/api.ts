import axios, { AxiosRequestConfig } from 'axios';
import { getCookies } from './cookies';

const DEFAULT_TIMEOUT = 15000;

export const fetchApi = async ({
    method = 'GET',
    baseUrl = process.env.NEXT_PUBLIC_API_URL,
    url = '',
    params = {},
    data = {},
    headers = {},
    ...rest
}: FetchApiProps) => {
    const authorizationToken: string | null = `Bearer ${await getCookies('access_token')}`;

    const finalHeaders = {
        Authorization: authorizationToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
        ...headers,
    };

    const axiosConfig: AxiosRequestConfig = {
        timeout: DEFAULT_TIMEOUT,
        baseURL: baseUrl,
        url,
        params,
        method,
        headers: finalHeaders,
        data,
        ...rest,
    };

    try {
        const response = await axios(axiosConfig);
        return response.data;
    } catch (error) {
        throw error;
    }
}

interface FetchApiProps {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    baseUrl?: string;
    url?: string;
    params?: Record<string, unknown>;
    data?: Record<string, unknown>;
    headers?: Record<string, string>;
    [key: string]: any;
}