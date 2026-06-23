import { getDictionary } from '@/i18n';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as 'zh' | 'en';
  const dict = await getDictionary(lang);

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900 mb-20">
        <div className="absolute inset-0 z-0">
          <Image src="/images/banner.jpg" alt="Contact Hero" fill className="object-cover opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.05]"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">{dict.contact.title}</h1>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information - Industrial Design */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">{dict.contact.getInTouch}</h2>
              <p className="text-slate-500 font-light text-lg">
                {lang === 'zh' 
                  ? '欢迎随时与我们联系。我们的专家团队将竭诚为您提供专业的港航数字化解决方案。' 
                  : 'Feel free to contact us anytime. Our expert team is dedicated to providing you with professional port and shipping digital solutions.'}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 border border-gray-200 flex items-start group hover:border-blue-500 transition-colors">
                <div className="w-14 h-14 bg-slate-100 flex items-center justify-center text-blue-600 mr-6 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{lang === 'zh' ? '公司地址' : 'Address'}</h3>
                  <p className="text-slate-600 font-light">{dict.footer.address}</p>
                </div>
              </div>

              <div className="bg-white p-8 border border-gray-200 flex items-start group hover:border-blue-500 transition-colors">
                <div className="w-14 h-14 bg-slate-100 flex items-center justify-center text-blue-600 mr-6 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{lang === 'zh' ? '联系电话' : 'Phone'}</h3>
                  <p className="text-slate-600 font-light text-xl tracking-wider">{dict.footer.phone}</p>
                </div>
              </div>

              <div className="bg-white p-8 border border-gray-200 flex items-start group hover:border-blue-500 transition-colors">
                <div className="w-14 h-14 bg-slate-100 flex items-center justify-center text-blue-600 mr-6 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{lang === 'zh' ? '电子邮箱' : 'Email'}</h3>
                  <p className="text-slate-600 font-light text-xl tracking-wider">{dict.footer.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 p-10 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[url('/images/grid.svg')] opacity-[0.05] pointer-events-none"></div>
            
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-8">{dict.contact.message}</h2>
            <ContactForm dict={dict} />
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-20 border border-gray-200 bg-white p-4 relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-blue-600"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-blue-600"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-blue-600"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-blue-600"></div>
          
          <div className="w-full h-[500px] bg-slate-100 flex items-center justify-center filter grayscale contrast-125 relative">
            <iframe 
              src="https://map.baidu.com/search/%E4%B8%8A%E6%B5%B7%E5%B8%82%E5%98%89%E5%AE%9A%E5%8C%BA%E7%9B%98%E5%AE%89%E8%B7%AF501%E5%8F%B7/@13502283.475,3645366.5,19z?querytype=s&da_src=shareurl&wd=%E4%B8%8A%E6%B5%B7%E5%B8%82%E5%98%89%E5%AE%9A%E5%8C%BA%E7%9B%98%E5%AE%89%E8%B7%AF501%E5%8F%B7&c=289&src=0&pn=0&sug=0&l=13&b=(13480027,3633887;13525915,3656927)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 mix-blend-multiply opacity-80 hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
