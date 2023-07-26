import Header from 'components/layouts/header';
import Footer from 'components/layouts/footer';

export default function DefaultLayout({ children }: any) {
    return (
        <div>
            <Header />
            <main className="pl-[119px] pr-32 pt-[130px] pb-24 flex flex-col items-center gap-[140px]">
                {children}
            </main>
            <Footer />
        </div>
    );
}
