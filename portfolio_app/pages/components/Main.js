import { Header, Image } from 'semantic-ui-react'


const Main = () => (


<div>
   <Image src={require('./images/orlando.jpg')} size='medium' circular centered />
   <style jsx>{`
      img {
        width: 500px
      }
    `}</style>
 </div>

)

export default Main
