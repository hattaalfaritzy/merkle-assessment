import { NextResponse } from 'next/server';
import { fetchApi } from '@/utils/api';

export async function POST(request: Request) {
    const body = await request.json();
    const { username, password } = body;

    try {
        const res = await fetchApi({
            url: '/auth/login',
            method: 'POST',
            data: {
                username: username,
                password: password,
            }
        });
        return NextResponse.json(res, { status: 200 });
    } catch (error: any) {
        return NextResponse.json(error?.response?.data, { status: error?.response?.data?.error?.http_code });
    }
}
