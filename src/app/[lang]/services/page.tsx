import { getDictionary } from '@/i18n';
import ServicesContent from '@/components/ServicesContent';

export default async function Services({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as 'zh' | 'en';
  const dict = await getDictionary(lang);

  return <ServicesContent lang={lang} dict={dict} />;
}
