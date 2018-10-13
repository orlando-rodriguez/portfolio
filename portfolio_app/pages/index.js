import Link from 'next/link'
import Layout from './components/MyLayout.js'



const Index = () => (
  <div>
  <Layout>
    <Link href="/about">
    <button>Go to About Page</button>
    </Link>
      <p>Hello Next.js</p>
  </Layout>
  </div>
)

export default Index
