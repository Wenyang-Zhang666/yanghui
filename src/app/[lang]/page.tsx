import { getDictionary } from '@/i18n';
import HomeContent from '@/components/HomeContent';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as 'zh' | 'en';
  const dict = await getDictionary(lang);

  return <HomeContent lang={lang} dict={dict} />;
}
