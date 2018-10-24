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
      <Menu fluid widths={3} icon='labeled'>
        <Link href='/' passHref>
          <Menu.Item
            href="/"
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Icon name='home' />
            Home
          </Menu.Item>
        </Link>

        <Link href='/about' passHref>
        <Menu.Item
          href="/about"
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          <Icon name='user outline' />
          About
        </Menu.Item>
        </Link>

        <Menu.Item
          name='video play'
          active={activeItem === 'video play'}
          onClick={this.handleItemClick}
        >
          <Icon name='video play' />
          Videos
        </Menu.Item>
      </Menu>
    )
  }
}
