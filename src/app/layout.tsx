import clsx from 'clsx';
import type { Metadata } from 'next';
import { POPPINS, ROBOTO_MONO } from '@/constants/fonts';
import '@/styles/index.scss';
import AuthWrapper from '@/utils/auth-wrapper';

export const metadata: Metadata = {
  title: 'Assessment Test - Merkle Innovation',
  description: 'Assessment Test - Merkle Innovation by hattaalfaritzy',
  authors: [
      {
          name: 'Muhammad Hatta Alfaritzy',
          url: 'https://www.linkedin.com/in/hattaalfaritzy/',
      },
  ],
  icons: {
      icon: '/images/logo.png',
      apple: '/images/logo.png',
  },
  openGraph: {
      title: 'Assessment Test - Merkle Innovation',
      description: 'Assessment Test - Merkle Innovation by hattaalfaritzy',
      images: '/images/logo.png',
      url: 'https://github.com/hattaalfaritzy/merkle-assessment',
  },
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang='en' className={clsx('scroll-smooth', POPPINS.variable, ROBOTO_MONO.variable)}>
            <body className='flex flex-col w-screen h-auto min-h-screen bg-[#F9FAFF]'>
                <AuthWrapper>{children}</AuthWrapper>
            </body>
        </html>
    );
}

interface Props {
    children: React.ReactNode;
}
