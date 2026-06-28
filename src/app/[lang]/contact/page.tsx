import { getDictionary } from '@/i18n';
import ContactForm from '@/components/ContactForm';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import Image from 'next/image';

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as 'zh' | 'en';
  const dict = await getDictionary(lang);

  const contactItems = [
    { icon: MapPin, title: lang === 'zh' ? '公司地址' : 'Address', value: dict.footer.address },
    { icon: Phone, title: lang === 'zh' ? '联系电话' : 'Phone', value: dict.footer.phone },
    { icon: Mail, title: lang === 'zh' ? '电子邮箱' : 'Email', value: dict.footer.email },
  ];

  const responseSteps =
    lang === 'zh'
      ? ['需求初筛与业务归类', '专家确认技术与交易要点', '形成服务建议与执行计划']
      : ['Requirement triage', 'Expert review of technical and transaction points', 'Service proposal and execution plan'];

  return (
    <div className="min-h-screen bg-[#f6f8fb] pt-20">
      <section className="relative flex min-h-[520px] items-center overflow-hidden bg-slate-950">
        <Image src="/yanghui/images/port-command-center.png" alt={dict.contact.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92),rgba(2,6,23,0.62)_50%,rgba(2,6,23,0.18))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.11)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-cyan-50 backdrop-blur">
              <span className="mr-3 h-2 w-10 bg-cyan-300" />
              {lang === 'zh' ? '快速响应 · 专家对接 · 项目推进' : 'Fast Response · Expert Match · Project Execution'}
            </div>
            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">{dict.contact.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-200">
              {lang === 'zh'
                ? '无论是船舶运营保障、港口信息化项目，还是二手船交易勘验与风险研判，我们都会根据需求匹配专业人员并形成清晰执行路径。'
                : 'For ship operations, port IT projects, or used vessel transaction assessment, we match the right specialists and define a clear execution path.'}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-10">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-14 bg-cyan-500" />
                <span className="text-sm font-black text-cyan-700">CONTACT</span>
              </div>
              <h2 className="text-4xl font-black leading-tight text-slate-950">{dict.contact.getInTouch}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {lang === 'zh'
                  ? '请留下您的项目背景、船型信息、港口场景或交易需求，我们将尽快安排对应专家沟通。'
                  : 'Share your project background, vessel type, port scenario, or transaction needs, and we will arrange the right expert follow-up.'}
              </p>
            </div>

            <div className="grid gap-4">
              {contactItems.map((item) => (
                <div key={item.title} className="border border-slate-200 bg-white p-6 shadow-[0_14px_50px_rgba(15,23,42,0.05)]">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-slate-950 text-cyan-200">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-base leading-7 text-slate-600">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-slate-200 bg-white p-6">
              <div className="mb-6 flex items-center gap-3">
                <Clock className="h-6 w-6 text-amber-500" />
                <h3 className="text-xl font-black text-slate-950">{lang === 'zh' ? '咨询响应流程' : 'Inquiry Response Flow'}</h3>
              </div>
              <div className="grid gap-px bg-slate-200">
                {responseSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4 bg-[#f8fafc] p-4">
                    <span className="flex h-8 w-8 items-center justify-center bg-cyan-600 text-sm font-black text-white">0{index + 1}</span>
                    <span className="text-sm font-bold text-slate-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-10">
            <div className="mb-8 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center bg-amber-400 text-slate-950">
                <Send className="h-7 w-7" />
              </span>
              <div>
                <p className="text-sm font-black text-amber-700">ONLINE MESSAGE</p>
                <h2 className="mt-2 text-3xl font-black text-slate-950">{dict.contact.message}</h2>
              </div>
            </div>
            <ContactForm dict={dict} />
          </div>
        </div>
      </div>
    </div>
  );
}
