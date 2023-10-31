'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getCookies } from './cookies';

export default function AuthWrapper({ children }: Props) {
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const getToken = async () => {
        const access_token = await getCookies('access_token');
        setToken(access_token);
    };

    useEffect(() => {
        getToken();
    }, [getToken]);

    useEffect(() => {
        if (!token) {
            router.push('/');
        } else {
            if (pathname) {
                router.push('/users');
            }
        }
    }, [token, pathname]);

    return <>{children}</>;
}

interface Props {
    children: React.ReactNode;
}
