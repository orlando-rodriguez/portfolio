import Link from 'next/link'
import { Icon, Menu } from 'semantic-ui-react'

const linkStyle = {
  marginRight: 15
}


export default class Header extends React.Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid widths={4} icon='labeled' style={{backgroundColor: '#5FAEB6'}}>
        <Link href='/' passHref>
          <Menu.Item
            as='a'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            style={{color: 'white'}}
          >
            <Icon name='home' />
            Home
          </Menu.Item>
        </Link>

        <Link href='/about' passHref>
        <Menu.Item
          as='a'
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          style={{color: 'white'}}
        >
          <Icon name='user outline' />
          About
        </Menu.Item>
        </Link>

        <Link href='/portfolio' passHref>
        <Menu.Item
          as='a'
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
          style={{color: 'white'}}
        >
          <Icon name='book' />
          Portfolio
        </Menu.Item>
        </Link>

        <Link href='/resume' passHref>
        <Menu.Item
          as='a'
          name='resume'
          active={activeItem === 'resume'}
          onClick={this.handleItemClick}
          style={{color: 'white'}}
        >
          <Icon name='newspaper outline' />
          Resume
        </Menu.Item>
        </Link>
      </Menu>
    )
  }
}
