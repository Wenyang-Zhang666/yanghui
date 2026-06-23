import { getDictionary } from '@/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';

export default async function News({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as 'zh' | 'en';
  const dict = await getDictionary(lang);

  const mockNews = [
    {
      id: 1,
      title: lang === 'zh' ? '成功案例：长兴2号趸船码头升级改造装修项目' : 'Success Case: Changxing No.2 Pontoon Wharf Upgrade & Renovation Project',
      date: '2023-08-16',
      summary: lang === 'zh' 
        ? '本项目为上海农业农村委员会执法总队长兴2号趸船码头内装升级改造工程。改造内容涵盖11名船员换班临时居所、厨房、冷库、办公及多媒体会议室，全面满足中国船舶检验局(ZC)船检规范标准及各项海事环保规定，为船员提供高标准的舒适安全环境。' 
        : 'This project is the interior upgrade and renovation of Changxing No.2 Pontoon Wharf for the Shanghai Agricultural and Rural Commission Law Enforcement Corps. The scope covers temporary quarters for 11 crew members, kitchens, cold storage, offices, and multimedia conference rooms, fully meeting ZC standards and maritime environmental regulations.',
      image: '/yanghui/images/repair.jpg'
    },
    {
      id: 2,
      title: lang === 'zh' ? '我司成功中标某大型港口网络安全加固项目' : 'Company Successfully Won the Bid for a Major Port Cybersecurity Hardening Project',
      date: '2026-05-12',
      summary: lang === 'zh' ? '近日，上海阳惠洋科技有限公司凭借过硬的技术实力和丰富的行业经验，成功中标某国内大型港口集团的工业控制系统网络安全加固项目。' : 'Recently, Shanghai Yanghuiyang Technology successfully won the bid for the ICS cybersecurity hardening project of a major domestic port group.',
      image: '/yanghui/images/tech.jpg'
    },
    {
      id: 3,
      title: lang === 'zh' ? 'CCS规范智能监控管理软件V2.0正式发布' : 'CCS Compliant Intelligent Monitoring Management Software V2.0 Officially Released',
      date: '2026-04-20',
      summary: lang === 'zh' ? '经过研发团队的不懈努力，我司自主研发的智能监控管理软件迎来重大更新，V2.0版本在数据处理能力和预警准确率上均有显著提升。' : 'After unremitting efforts by the R&D team, our self-developed intelligent monitoring management software has received a major update.',
      image: '/yanghui/images/ship.jpg'
    }
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900 mb-20">
        <div className="absolute inset-0 z-0">
          <Image src="/yanghui/images/ship.jpg" alt="News Hero" fill className="object-cover opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/yanghui/images/grid.svg')] opacity-[0.05]"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">{dict.navigation.news}</h1>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        
        {/* Featured Case Study - Large Card */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">{lang === 'zh' ? '特色案例' : 'Featured Case Study'}</h2>
          </div>
          
          <Link href={`/${lang}/news/1`} className="group block bg-white border border-gray-200 overflow-hidden hover:border-blue-500 transition-colors">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto min-h-[300px]">
                <Image src={mockNews[0].image} alt={mockNews[0].title} fill className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">CASE STUDY</div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-4 font-mono">
                  <Calendar className="w-4 h-4 mr-2" />
                  {mockNews[0].date}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-blue-600 transition-colors">
                  {mockNews[0].title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 font-light line-clamp-3">
                  {mockNews[0].summary}
                </p>
                <div className="inline-flex items-center text-slate-900 font-bold uppercase tracking-widest text-sm mt-auto">
                  {dict.home.learnMore} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Regular News Grid */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">{lang === 'zh' ? '最新动态' : 'Latest Updates'}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockNews.slice(1).map((news) => (
              <Link key={news.id} href={`/${lang}/news/${news.id}`} className="group flex flex-col bg-white border border-gray-200 hover:border-blue-500 transition-colors h-full">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-4 font-mono">
                    <Calendar className="w-4 h-4 mr-2" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light line-clamp-3 flex-grow">
                    {news.summary}
                  </p>
                  <div className="inline-flex items-center text-slate-900 font-bold uppercase tracking-widest text-xs mt-auto">
                    {dict.home.learnMore} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
