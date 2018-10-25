import {Segment, Container, Grid, Header, List, } from 'semantic-ui-react'

export default class Footer extends React.Component {

  render() {
    return(
      <Segment inverted vertical style={{ padding: '3em 0em', marginTop: '10em', }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Hire Me' />
                    <List link inverted>
                      <List.Item  href='/about' as='a'>About</List.Item>
                      <List.Item as='a'>Contact Us</List.Item>
                      <List.Item as='a'>Religious Ceremonies</List.Item>
                      <List.Item as='a'>Gazebo Plans</List.Item>
                    </List>
                  </Grid.Column>

                  <Grid.Column width={7}>
                    <Header as='h4' inverted>
                      Footer Header
                    </Header>
                    <p>
                      Extra space for a call to action inside the footer that could help re-engage users.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
            <style jsx>{`
              div.ui.inverted.vertical.segment {
                margin-top: 10em;
              }
            `}</style>
          </Segment>
    )
  }
}
