'use client';
import { usePathname } from 'next/navigation';

export default function Footer() {
	const pathname = usePathname();
    return (
        <footer className='footer'>
            <div className='flex justify-center items-center w-full bg-primary py-2 hide-mobile'>
                <span className='text-sm text-white'>© Merkle Innovation Assessment - Muh. Hatta Alfaritzy</span>
            </div>
        </footer>
    );
}
