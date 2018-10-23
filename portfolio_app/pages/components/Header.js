import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (

  <div>

    <nav>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>

      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>

      <Link href="/resume">
        <a style={linkStyle}>Resume</a>
      </Link>

      <Link href="/contact">
        <a style={linkStyle}>Contact</a>
      </Link>
    </nav>

    <style jsx>{`
      a {
        font-family: "Arial";
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>

  </div>


)

export default Header
