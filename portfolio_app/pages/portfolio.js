import Layout from './components/MyLayout.js'
import {Button} from 'semantic-ui-react'

const Portfolio = () => (
  <div>
    <Layout title='Portfolio'>
    <main>
        <div>
          <img src={require('./components/images/soapwashing.jpg')} alt="Hand Washing" />
          <h2>Capstone</h2>
          <Button fluid style={{marginBottom: '.5em'}} ><a href='https://github.com/orlando-rodriguez/capstone'>Source Code</a></Button>
          <Button fluid style={{marginBottom: '.5em'}} ><a href='https://craftydudestore.herokuapp.com/'>Live Site</a></Button>
          <p className="description">
          Crafty Dude is a natural, organic skincare solution.
           </p>
        </div>
        <div>
          <img src={require('./components/images/map.jpg')} alt="Map" />
          <h2>Where's Orlando?</h2>
          <Button  fluid style={{marginBottom: '.5em'}} ><a href='https://github.com/orlando-rodriguez/wheresorlando'>Source Code</a></Button>
          <Button fluid style={{marginBottom: '.5em'}} ><a href='https://whereorlando.firebaseapp.com/'>Live Site</a></Button>
          <p className="description">
          Discover a new hot spot and find Orlando along the way.
           </p>
        </div>
        <div>
          <img src={require('./components/images/popcorn.jpg')} alt="Popcorn" />
          <h2>Movie Finder</h2>
          <Button  fluid style={{marginBottom: '.5em'}} ><a href='https://github.com/orlando-rodriguez/galvanize-tower/tree/master/client/app/src'>Source Code</a></Button>
          <Button fluid style={{marginBottom: '.5em'}} ><a href='https://moviefinder-47753.firebaseapp.com/'>Live Site</a></Button>
          <p className="description">
          Have a movie in mind? Wanna know what the plot is?
           </p>
        </div>
        <div>
          <img src={require('./components/images/lightbulb.jpeg')} alt="light bulb" />
          <h2>To-Do Organizer</h2>
          <Button  fluid style={{marginBottom: '.5em'}} ><a href='https://github.com/orlando-rodriguez/mytodomvc'>Source Code</a></Button>
          <Button fluid style={{marginBottom: '.5em'}} ><a href='https://todo-yeoman.firebaseapp.com/'>Live Site</a></Button>
          <p className="description">
            Create, Update, and Delete items from a To-Do list.
          </p>
        </div>

        <style jsx>{`
          main {
                display: grid;
                grid-template-columns: 250px 250px;
                grid-template-rows: repeat(2, 450px);
                grid-gap: 20px;
                margin-top: 44px;
                justify-content: space-around;
                align-items: stretch;
                align-content: center;
                grid-auto-rows: 500px;
              }

          h2 {
                font-family: Poppins;
                font-size: 18px;
                font-weight: 600;
                letter-spacing: 0.3px;
                text-align: center;
                color: #4a4a4a;

              }
          img {
                width: 100%;
                height: 150px;
              }
       button.ui.fluid.button.price {
                font-family: Poppins;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0.3px;
                text-align: center;
                color: #4a4a4a;
                position: relative;
                bottom: 5px;
              }
 .description {
                font-family: Work Sans;
                font-size: 14px;
                font-weight: 300;
                line-height: 1.29;
                letter-spacing: 0.1px;
                text-align: left;
                color: #4a4a4a;
                padding: 10px 0px 10px 10px;
                border-top: 1px solid #4a4a4a;
              }
        `}</style>
      </main>
    </Layout>
  </div>

)

export default Portfolio
