import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';

export default function DefaultLayout({ children }: Props) {
    return (
        <div id='layout-default'>
            <Header />
            <main className='main'>{children}</main>
            <Footer />
        </div>
    );
}

interface Props {
    children: React.ReactNode;
}
