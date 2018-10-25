import {Segment, Container, Grid, Header, List, Icon } from 'semantic-ui-react'

export default class Footer extends React.Component {

  render() {
    return(
      <Segment vertical style={{ padding: '3em 0em', marginTop: '10em', backgroundColor: '#778899' }}>
            <Container>
              <Grid divided  stackable>
                <Grid.Row>
                  <Grid.Column width={4} >

                    <List link inverted style={{color: '#778899', textAlign: 'center'}}>
                      <List.Item  style={{padding: '1em 0em'}} href='/about' as='a'>About</List.Item>
                      <List.Item  style={{paddingBottom: '1em'}} href='/portfolio' as='a' >Portfolio</List.Item>
                      <List.Item style={{paddingBottom: '1em'}} href='/resume' as='a'>Resume</List.Item>
                      <Header inverted as='h5' content='&copy; OR 2018' style={{color: '#323a45', textAlign: 'center'}} />

                    </List>
                  </Grid.Column>

                  <Grid.Column width={6} >
                    <Header as='h3' inverted>
                      Hire Orlando
                    </Header>
                    <p style={{color: '#323a45', margin: 0}}>
                      Available for full-time, contract, and freelance work.
                    </p>

                    <address>
                      <Icon.Group size='small'>
                        <Icon name='envelope open outline' />
                      </Icon.Group>
                      <a  style={{ color: '#323a45'}} href="mailto:orlando.r@me.com">orlando.r@me.com</a>
                    </address>


                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>

          </Segment>
    )
  }
}
