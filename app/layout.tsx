import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'agentkit',
  description: 'AI를 제대로 일하게 만드는 법: 바이브 코딩을 넘어 에이전틱 코딩으로'
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const navbar = (
    <Navbar
      logo={<span style={{ fontWeight: 700, fontSize: '1.1rem' }}>⚙️ agentkit</span>}
      projectLink="https://github.com/effective-ai-lab/agentkit"
    />
  )
  const footer = <Footer>agentkit — effective-ai-lab</Footer>
  const pageMap = await getPageMap()

  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/effective-ai-lab/agentkit/tree/main"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
