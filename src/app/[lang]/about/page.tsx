import { getDictionary } from '@/i18n';
import AboutContent from '@/components/AboutContent';

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as 'zh' | 'en';
  const dict = await getDictionary(lang);

  return <AboutContent lang={lang} dict={dict} />;
}
