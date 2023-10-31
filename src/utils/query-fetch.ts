import { fetchApi } from './api';

export async function queryFetch(options: FetchApiProps) {
    const baseUrl = `${window.location.origin}/admin/api/`;
    
    return fetchApi({
        baseUrl: baseUrl,
        ...options
    });
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
