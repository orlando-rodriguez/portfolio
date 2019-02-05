import Layout from './components/MyLayout.js'
import { Segment, Image } from 'semantic-ui-react'

export default () => (
  <div>
    <Layout title='About Orlando'>
      <h1 style={{margin: '1em 1em', color: '#9A9EAB',}}>About Orlando</h1>
      <div>
      <Segment centered style={{minHeight: '300px', margin: '1em 1em'}}>
        <Image src={require('./components/images/IMG_1716.JPG')} size='small' floated='left' />
        <p>
          I am a software developer coding in JavaScript, NodeJS, Java and SQL. I graduated from
          the University of Colorado - Boulder in May 2017 with a B.A. Integrative Physiology.
          My passion lies in helping people from diverse backgrounds enrich their daily lives
          through the use of technology.
        </p>
        <Image src={require('./components/images/copper.jpg')} size='small' floated='right' />
        <p>
          In July 2018, I received a certificate from Galvanize Denver in Software Engineering. I
          learned React/Angular, CSS pre-processors (SASS/LESS), REST, PostgreSQL along with paired-programming methods, test-driven development (TDD),
          version control via Git/GitHub and object-oriented programming principles. I also worked on
          group projects and hackathons using agile methodologies such as SCRUM and Kanban.
        </p>
        <p>
          I am looking for full-time employment in an innovative, rigorous team environment delivering tailor-made
          solutions. Please contact me using my email or connect with me on Linkedin
          to stay up-to-date on my progress.

          </p>
      </Segment>
      </div>
    </Layout>
  </div>
)
