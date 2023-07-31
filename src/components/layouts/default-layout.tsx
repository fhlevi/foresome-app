import Header from 'components/layouts/header';
import Footer from 'components/layouts/footer';

export default function DefaultLayout({ children }: any) {
    return (
        <div className="relative top-[90px]">
            <Header />
            <main className="p-4 xl:pl-[119px] xl:pr-32 xl:pt-[130px] pb-24 flex flex-col items-center gap-[60px] xl:gap-[140px]">
                {children}
            </main>
            <Footer />
        </div>
    );
}
