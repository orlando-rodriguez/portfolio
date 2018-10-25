import Layout from './components/MyLayout.js'
import { Segment, Image } from 'semantic-ui-react'

export default () => (
  <div>
    <Layout title='About Orlando'>
      <h1 style={{margin: '1em 1em', color: '#5faeb6',}}>About Orlando</h1>
      <div>
      <Segment centered style={{minHeight: '300px', margin: '1em 1em'}}>
        <Image src={require('./components/images/IMG_1716.JPG')} size='small' floated='left' />
        <p>
          I am a software engineer developing in JavaScript, NodeJS, Java and SQL. I graduated from
          the University of Colorado - Boulder in May 2017 with a B.A. Integrative Physiology.
          My passion lies in helping people from diverse backgrounds enrich their daily lives
          through the use of technology.
        </p>
        <Image src={require('./components/images/nodejs-seeklogo.com.svg')} size='small' floated='right' />
        <p>
          In July 2018, I was awarded a Web Development certificate from Galvanize Denver. I
          learned many tools and technologies along with paired-programming methods, test-driven development (TDD),
          version control via Git/GitHub and object-oriented programming principles. I also worked on
          group projects and hackathons using agile methodologies such as SCRUM and Kanban.
        </p>
        <p>
          I am looking for full-time employment in an innovative, rigorous team environment delivering tailor-made
          solutions. My knowledge of React, GraphQL, REST Web Services, PostgreSQL, Express and SASS/LESS gives me
          the ability to excel in many roles. Please contact me using my email or connect with me on Linkedin
          to stay up-to-date on my progress.

          </p>
      </Segment>
      </div>
    </Layout>
  </div>
)
