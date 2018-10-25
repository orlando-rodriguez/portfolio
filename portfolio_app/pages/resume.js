import Layout from './components/MyLayout.js'
import {Image, Button, Menu} from 'semantic-ui-react'
const Resume = () => (
  <div>
    <Layout title='Resume'>
    <Image src={require('./components/images/Resume.png')} style={{maxWidth: '600px'}} centered />

      <div>
      <Button fluid style={{marginTop: '1em'}} ><a
      download href='/OrlandoRodriguez_Resume.pdf'>Download as PDF</a></Button>
      </div>
    </Layout>
  </div>

)

export default Resume
