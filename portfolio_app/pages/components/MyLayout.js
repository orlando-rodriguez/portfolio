import Header from './Header'
import Footer from './Footer'
import Link from 'next/link'
import Head from 'next/head'

const layoutStyle = {
  margin: 0,
  padding: 0
}

export default ({ children, title = `Orlando's Portfolio` }) => (
  <div style={{ padding: 0, margin: 0, backgroundColor: '#f6f7f9', }}>

    <Head>
      <title>{ title }</title>
      <meta name="keywords" content="HTML, CSS, JavaScript, React, Portfolio, Software Engineer, Resume" />
      <meta name="description" content="Orlando Rodriguez' Software Engineering Portfolio" />
      <meta name="author" content="Orlando Rodriguez" />
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
      />

    </Head>

    <Header />

    {children}

    <Footer />
  </div>
)
