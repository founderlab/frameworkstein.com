import _ from 'lodash' // eslint-disable-line
import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

export default class Packages extends Component {

  render() {
    return (
      <div>

        <header>
          <h1>Quick Start (web app)</h1>
        </header>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h4>
                Frameworkstein has a cli to give you a starting point for your app
              </h4>
              <p>It has a few example models & components to give you an idea of how things work.</p>

              <h2 className="subhead">
                1. Install dependencies
              </h2>
              <p className="small">
                You'll need <a href="https://nodejs.org">Node.js</a>, <a href="https://www.postgresql.org">PostgreSQL</a> and <a href="https://redis.io/">Redis</a>.
              </p>
              <p>
                First up, you need to make sure you have a few programs installed. For brevity's sake we're going to assume you're on a mac for this step - hit up their respective homepages for installion instructions on other systems.
              </p>

              <p>
                <pre>
                  $ brew install postgres{'\n'}
                  $ brew install redis{'\n'}
                  $ brew install node{'\n'}
                </pre>
              </p>

              <h2 className="subhead">
                2. Install the Frameworkstein cli
              </h2>
              <p>
                <pre>
                  $ npm i frameworkstein -g{'\n'}
                </pre>
              </p>

              <h2 className="subhead">
                3. Create a new app
              </h2>
              <p>
                <pre>
                  $ frameworkstein new myapp{'\n'}
                  $ cd myapp
                </pre>
              </p>

              <h2 className="subhead">
                4. Run the app
              </h2>
              <p className="small">
                There's two commands to run in parallel here - one for the node server and one for webpack.
              </p>
              <p>
                <pre>
                  # Run the node server (with a development environment){'\n'}
                  $ npm run start-dev
                </pre>
              </p>
              <p>
                <pre>
                  # Run the webpack server in another terminal{'\n'}
                  $ npm run client-watch
                </pre>
              </p>

              <h2 className="subhead">
                4. That's it! <a href="http://localhost:3000">Visit your monster of a new project</a>
              </h2>
              <p>
                If all went well your app is running and can be found at <a href="http://localhost:3000">http://localhost:3000</a>.
                Frameworkstein will have created a database for you and populated it with some dummy data.
              </p>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
