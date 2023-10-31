'use server'
import { cookies } from 'next/headers';

export const setCookies = (key: string, value: string, expiryInSeconds?: number) => {
    if (expiryInSeconds) {
        const expiry = Date.now() + expiryInSeconds * 1000;
        cookies().set({
            name: key,
            value: value,
            httpOnly: true,
            expires: expiry,
            secure: true,
        });
    } else {
        cookies().set({
            name: key,
            value: value,
            httpOnly: true,
            secure: true,
        });
    }
};

export const getCookies = (key: string) => {
    const item =  cookies().get(key);
    if (item) {
        return item?.value;
    }
    return null;
};

export const removeCookies = (key: string) => {
    const item = cookies().get(key);
    if (item) {
        cookies().set({
            name: key,
            value: '',
        });
    }
};
