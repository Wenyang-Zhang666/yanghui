import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '上海阳惠洋科技有限公司 | YHY TECH',
  description: '上海阳惠洋科技有限公司官方网站',
};

export default function RootPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=/yanghui/zh" />
        <title>上海阳惠洋科技有限公司 | YHY TECH</title>
      </head>
      <body>
        <p>Redirecting to /yanghui/zh...</p>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = '/yanghui/zh';`,
          }}
        />
      </body>
    </html>
  );
}
