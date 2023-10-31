'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button, ImageWithFallback } from '@/components/commons';
import { InputPassword, InputText } from '@/components/forms';
import { formLogin } from '@/utils/form-validations';

export default function Login() {
    const [loading, setLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm(formLogin);

    const onSubmit = async (value: AuthInterface.APIParamsLogin) => {
        setLoading(true);
        console.log(value, 'cek value');        
        setLoading(false);
    };

    return (
        <div className='flex flex-col justify-between w-full h-screen'>
            <div className='flex flex-col justify-center items-center h-screen space-y-4 px-4 lg:px-0 bg-dark'>
            <div className='flex flex-col justify-start items-start'>
                <span className='text-sm text-white'>Login</span>
                <ImageWithFallback alt='Logo Merkle Innovation' width={80} height={80} src='/images/logo.png' className='w-40 h-auto' />
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
