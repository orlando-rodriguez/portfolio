import Header from './Header'
import Footer from './Footer'
import Link from 'next/link'
import Head from 'next/head'

const layoutStyle = {
  margin: 0,
  padding: 0
}

export default ({ children, title = `Orlando's Portfolio` }) => (
  <div style={{ padding: 0, margin: 0, backgroundColor: '#323a45', }}>

    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
      />
      <link
        rel="stylesheet"
        href="styles.css"
      />
    </Head>

    <Header />

    {children}

    <Footer />
  </div>
)
