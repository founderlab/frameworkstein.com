import _ from 'lodash' // eslint-disable-line
import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

export default class Packages extends Component {

  render() {
    return (
      <div>

        <header>
          <h1>Quick Start</h1>
        </header>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h4>
                Frameworkstein has a cli to give you a starting point for your presumably hideous creation.
              </h4>
              <p>This doc goes through the steps to set up a new web app. </p>
              <p>This app will start with a few example models & components to give you an idea of how things work.</p>

              <h2 className="subhead">
                1. Install dependencies
              </h2>
              <p className="small">
                You'll need <a href="https://nodejs.org">Node.js</a>, <a href="https://www.postgresql.org">PostgreSQL</a> and <a href="https://redis.io/">Redis</a>.
              </p>
              <p>
                First up, you need to make sure you have a few programs installed. For brevity's sake we're going to assume you're on a mac for this step - hit up their respective homepages for installation instructions on other systems.
              </p>
              <pre>
                $ brew install postgresql{'\n'}
                $ brew install redis{'\n'}
                $ brew install node{'\n'}
              </pre>

              <p>
                Make sure that Postgres and Redis are running before you proceed. Easiest way is to use <a href="https://github.com/Homebrew/homebrew-services">Homebrew Services</a>, which will ensure they also start at startup.
              </p>
              <pre>
                $ brew tap homebrew/services{'\n'}
                $ brew services start postgresql{'\n'}
                $ brew services start redis{'\n'}
              </pre>

              <h2 className="subhead">
                2. Install the Frameworkstein cli
              </h2>
              <p className="small">
                Plus a few node dependencies. <a href="https://babeljs.io">Babel</a> is used to transpile JavaScript. <a href="https://nodemon.io">Nodemon</a> is used to auto restart the node server when files change.
              </p>
              <pre>
                $ npm install -g frameworkstein nodemon babel@5{'\n'}
              </pre>

              <h2 className="subhead">
                3. Create a new app
              </h2>
              <p className="small">
                Make sure you're in whichever directory you like to put your projects first, of course.
              </p>
              <pre>
                $ stein new myapp{'\n'}
                $ cd myapp{'\n'}
                $ npm install{'\n'}
              </pre>

              <h2 className="subhead">
                4. Run the app
              </h2>
              <p className="small">
                There's two commands to run in parallel here - one for the node server and one for webpack. You'll need two terminals open to run them both at the same time.
              </p>
              <pre>
                # Run the node server (with a development environment){'\n'}
                $ npm run start-dev
              </pre>
              <pre>
                # Run the webpack server in another terminal{'\n'}
                $ npm run client-watch
              </pre>

              <p>You should have something looking like this:</p>
              <p><a href="/public/images/quickstart.jpg" target="_blank"><img src="/public/images/quickstart.jpg" /></a></p>

              <h2 className="subhead">
                4. Nice one! We've created a monster
              </h2>
              <p>
                If all went well your app is running and can be found at <a href="http://localhost:3000">http://localhost:3000</a>.
              </p>
              <p>
                Frameworkstein will have created a database for you and populated it with some dummy data.
              </p>
              <p>
                There's a bunch of example React components in the <code>shared/modules</code> directory that you can have a poke around with.
              </p>

              <h2 className="subhead">
                5. Add a model
              </h2>
              <p className="small">(extra credit)</p>
              <pre>
                # Stop the server with `ctrl-c`{'\n'}
                $ stein add-model Monster{'\n'}
                # Run the server again{'\n'}
                $ npm run start-dev{'\n'}
              </pre>
              <p>You now have a Monster model with REST endpoints at <a href="http://localhost:3000/api/monsters">http://localhost:3000/api/monsters</a>.</p>

              <h2 className="subhead">
                6. Edit your models
              </h2>
              <p className="small">(and a gold star)</p>
              <p>Open up <code>shared/configureAdmin.js</code> and add an entry like the following to the models array:</p>
              <pre>
{`{
  Model: require('./models/Monster'),
},`}
              </pre>
              <p>Give the model some data fields in its schema at <code>shared/models/schemas/monster.js</code></p>
              <p>Visit the admin panel at <a href="http://localhost:3000/admin/monsters">http://localhost:3000/admin/monsters</a> to do CRUD things to your Monsters.</p>
              <p className="small">Login email: <code>admin@frameworkstein.com</code></p>
              <p className="small">Password: <code>frameworkstein</code></p>
              <p className="small">You can modify these defaults in the <code>scaffold</code> directory.</p>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
