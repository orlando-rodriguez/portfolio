import Header from './Header'
import Link from 'next/link'
import Head from 'next/head'

const layoutStyle = {
  margin: 0,
  padding: 0
}

export default ({ children, title = `Orlando's Portfolio` }) => (
  <div style={layoutStyle}>

    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <Header />

    {children}

    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)
