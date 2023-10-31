'use client'
import { queryFetch } from '@/utils/query-fetch';
import { removeCookies, setCookies } from '@/utils/cookies';

export const login = async ({ username, password }: AuthInterface.APIParamsLogin) => {
    try {
        const res: AuthInterface.ApiResponseLogin = await queryFetch({
            url: '/auth/login',
            method: 'POST',
            data: {
                username: username,
                password: password,
            }
        });
        if (res && res.token) {
            setCookies('access_token', res.token);
        }
        return res;
    } catch (error: any) {
        throw Error(error?.response?.data?.error?.message);
    }
};


export const logout = async () => {
    try {
        removeCookies('access_token');
        return true;
    } catch (error) {
        throw error;
    }
};