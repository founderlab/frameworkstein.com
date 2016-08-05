import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Icon from '../../utils/components/Icon'

const npmLink = (name, displayName) => (<a href={`https://www.npmjs.com/package/${name}`} target="_blank">{displayName || name}</a>)

export default class Landing extends React.Component {

  render() {
    return (
      <div className="landing">
        <header>
          <h1>Frameworkstein</h1>
          <h3>Monstrous React and React Native app development</h3>

          <div className="profile-avatar">
            <img src="/public/frankie-pixel-peep.svg" />
          </div>

          <p>Rarr</p>

          <div className="install">
            <pre>
              $ npm install frameworkstein
            </pre>

            <pre>
              $ stein new my-electric-react-app
            </pre>

            <pre>
              $ stein new-mobile my-ghastly-react-native-app
            </pre>
          </div>

        </header>

        <Grid fluid className="features">
          <Row>

            <Col sm={4} className="feature">
              <Icon icon="brain" />
              <h3>Reduce JS Fatigue</h3>
              <p>We've picked a bunch of good modules so you don't have to, and written the glue to tie them together</p>
            </Col>

            <Col sm={4} className="feature">
              <Icon icon="battery-1" />
              <h3>Batteries included</h3>
              <p>CLI, auth, admin panel</p>
            </Col>

            <Col sm={4} className="feature">
              <Icon icon="street-1" />
              <h3>No messing around</h3>
              <p>Redux and Webpack boilerplate taken care of. Universal out of the box. Sensible project structure</p>
            </Col>

          </Row>
        </Grid>

        <Grid fluid>
          <Row>
            <Col xs={8} xsOffset={2}>
              <blockquote>
                <div className="quote" />
                <p>If I see but one smile on your lips when we meet, occasioned by this or any other exertion of mine, I shall need no other happiness.</p>
                <footer>Mary Shelly, <cite>Frankenstein</cite></footer>
              </blockquote>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="description">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>
                Frameworkstein helps you build React and React Native apps quickly using the best stuff from the ecosystem.
              </h2>

              <p>Frameworkstein isn't a framework. It's a collection of modules that work well and the glue to make them work well together.</p>

              <h3>Auth</h3>
              <p>The fl-auth-* collection of modules uses {npmLink('passport')} for user authentication.</p>
              <p>Included are login forms in React, Redux actions and a reducer to do the dirty work, and all that annoying email confirmation / password reset junk.</p>
              <p>Facebook and LinkedIn logins work out of the box too.</p>

              <h3>Automagic admin</h3>
              <p>{npmLink('fl-admin')} will automatically generate an admin site for you.</p>
              <p>Each model in your app has its own page where you can create, edit, and delete its data.</p>

              <h3>Data loading</h3>
              <p>Frameworkstein gives you a data loading story for your components that just works.</p>
              <p>Load data asynchronously, and defer rendering until it's done (or don't).</p>
              <p>Works the same whether your components are being rendered on the client or server.</p>

              <h3>Database agnostic ORM</h3>
              <p>Frameworkstein uses {npmLink('backbone-orm')} to talk to your database.</p>
              <p>BackboneORM will happily talk to MongoDB, Postgres and a few other databases.</p>
              <p>You can develop quickly without worrying about migrations with MongoDB and switch to PostgreSQL when you deploy.</p>

              <h3>Quickstart with a CLI</h3>
              <p>Create a new web or mobile app with a single command.</p>
              <p>Redux and Webpack boilerplate is generated for you.</p>
              <p>Hot loading will just work - you can get straight into making stuff.</p>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
