import Link from 'next/link'
import Layout from './components/MyLayout.js'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <div>
  <Layout>

    <ul>
      <PostLink title="Hello Next.js"/>
      <PostLink title="Learn Next.js is awesome"/>
      <PostLink title="Deploy apps with Zeit"/>
    </ul>

    <p>Hello Next.js</p>
  </Layout>
  </div>
)

export default Index
