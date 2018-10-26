import { Header, Image, Grid, Segment, Divider } from 'semantic-ui-react'


const Main = () => (



<div>

   <Image src={require('./images/orlandocutout.jpg')} size='large' alt='Orlando Selfie'  centered />

    <section>
      <h2>Full-Stack Software Engineer</h2>
      <Grid columns={3} relaxed style={{ marginTop: '2em' }}>
        <Grid.Column style={{borderRightStyle: 'dashed', borderRightColor: '#778899',}}>
          <Image src={require('./images/react-seeklogo.com.svg')} alt='React Logo' size='small' centered style={{ width: '150px', height: '150px', }} />
          <p>React</p>
        </Grid.Column>

        <Grid.Column style={{borderRightStyle: 'dashed', borderRightColor: '#778899',}}>
          <Image src={require('./images/javascript-js-seeklogo.com.svg')} alt='JavaScript logo' size='small' centered style={{ width: '150px', height: '150px', borderRight: '1px', }} />
          <p>JavaScript</p>
        </Grid.Column>
        <Divider vertical></Divider>
        <Grid.Column>
          <Image src={require('./images/nodejs-seeklogo.com.svg')} alt='NodeJS logo' size='small' centered style={{ width: '150px', height: '150px', }} />
          <p>NodeJS</p>
        </Grid.Column>
      </Grid>
    </section>

    <style jsx>{`
       h2, p {
         font-family: "Arial";
         text-align: center;
         margin-top: 1em;
         color: #5faeb6;
       }
     `}</style>
 </div>

)

export default Main
