import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { getDictionary } from '@/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }: { params: Promise<{ lang: 'zh' | 'en' }> }): Promise<Metadata> {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return {
    title: dict.seo.title,
    description: dict.seo.description,
    keywords: '港口网络安全, 船舶运营服务, 船舶备件采购, 船岸数据集成, 上海阳惠洋科技',
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as 'zh' | 'en';
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar lang={lang} dict={dict} />
        <main className="flex-grow">{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
