import {Segment, Container, Grid, Header, List, Icon } from 'semantic-ui-react'

export default class Footer extends React.Component {

  render() {
    return(
      <Segment vertical style={{ padding: '3em 0em', marginTop: '10em', backgroundColor: '#778899' }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3} >

                    <List link inverted style={{color: '#778899'}}>
                      <List.Item  style={{padding: '1em 0em'}} href='/about' as='a'>About</List.Item>
                      <List.Item  style={{paddingBottom: '1em'}} href='/portfolio' as='a' >Portfolio</List.Item>
                      <List.Item style={{paddingBottom: '1em'}} href='/resume' as='a'>Resume</List.Item>

                    </List>
                    <Header inverted as='h5' content='&copy; OR 2018' style={{color: '#323a45'}} />
                  </Grid.Column>

                  <Grid.Column width={7} >
                    <Header as='h3' inverted>
                      Hire Orlando
                    </Header>
                    <p style={{color: '#323a45', margin: 0}}>
                      Available for full-time, contract, and freelance work.
                    </p>

                    <Header as='h4' style={{color: '#323a45', margin: 0}}>
                      <Icon.Group size='small'>
                        <Icon name='phone' />
                      </Icon.Group>
                      (303)-518-3913
                    </Header>

                    <Header as='h4' style={{color: '#323a45', margin: 0}}>
                      <Icon.Group size='small'>
                        <Icon name='envelope open outline' />
                      </Icon.Group>
                      orlando.r@me.com
                    </Header>

                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>

          </Segment>
    )
  }
}
