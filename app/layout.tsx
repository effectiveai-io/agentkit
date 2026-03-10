import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'vibekit',
  description: 'AI 도구를 제대로 쓰는 법: 프롬프트부터 앱 배포까지'
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const navbar = (
    <Navbar
      logo={<span style={{ fontWeight: 700, fontSize: '1.1rem' }}>⚡ vibekit</span>}
      projectLink="https://github.com/effective-ai-lab/vibekit"
    />
  )
  const footer = <Footer>vibekit — effective-ai-lab</Footer>
  const pageMap = await getPageMap()

  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/effective-ai-lab/vibekit/tree/main"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
