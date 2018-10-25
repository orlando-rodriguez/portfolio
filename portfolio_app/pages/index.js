import Link from 'next/link'
import Layout from './components/MyLayout.js'
import Main from './components/Main.js'
import fetch from 'isomorphic-unfetch'
import { Image } from 'semantic-ui-react'



const Index = (props) => (
  <Layout>
    <h1>Orlando Rodriguez</h1>
    <Main />

    <style jsx>{`
      h1 {
        font-family: "Arial";
        text-align: center;
        color: #5faeb6;
      }

    `}</style>
  </Layout>
)


export default Index
