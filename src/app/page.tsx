'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, ImageWithFallback } from '@/components/commons';
import { InputPassword, InputText } from '@/components/forms';
import { formLogin } from '@/utils/form-validations';
import { login } from '@/services/auth';

export default function Login() {
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm(formLogin);

    const onSubmit = async (value: AuthInterface.APIParamsLogin) => {
        setLoading(true);
        try {
            const res: any = await login({
                username: value.username,
                password: value.password,
            });

            if (typeof res === 'string') {
                setErrorMessage(res);
                if (errorMessage?.toLowerCase().includes('username') && errorMessage?.toLowerCase().includes('password')) {
                    setError('username', { message: errorMessage });
                    setError('password', { message: errorMessage });
                } else if (errorMessage.toLowerCase().includes('username')) {
                    setError('username', { message: errorMessage });
                } else if (errorMessage.toLowerCase().includes('password')) {
                    setError('password', { message: errorMessage });
                }
            }
        } catch (err: any) {
            console.log(err);
        }
        setLoading(false);
    };

    return (
        <div className='flex flex-col justify-between w-full h-screen'>
            <div className='flex flex-col justify-center items-center h-screen space-y-4 px-4 lg:px-0 bg-dark'>
            <div className='flex flex-col justify-start items-start'>
                <span className='text-sm text-white'>Login</span>
                <div className='flex flex-row justify-center items-end'>
                    <ImageWithFallback alt='Logo Merkle Innovation' width={80} height={80} src='/images/logo.png' className='w-40 h-auto' />
                    <span className='text-sm text-black leading-none pb-2'>Assessment Test</span>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full lg:w-2/6 space-y-4'>
                <InputText type='text' register={register('username')} errMessage={errors.username?.message} placeholder='Email' label='Email' />
                <InputPassword register={register('password')} errMessage={errors.password?.message} placeholder='Password' label='Password' />
                <Button label='Login' type='submit' className='w-full' loading={loading} classNameLabel='font-bold tracking-wide' />
            </form>
        </div>
        </div>
    );
}
