export default {
  logo: (
    <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>
      ⚡ vibekit
    </span>
  ),
  project: {
    link: 'https://github.com/effective-ai-lab/vibekit'
  },
  docsRepositoryBase: 'https://github.com/effective-ai-lab/vibekit/tree/main',
  footer: {
    text: 'vibekit — effective-ai-lab'
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="AI 도구를 제대로 쓰는 법: 프롬프트부터 앱 배포까지" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – vibekit'
    }
  }
}
