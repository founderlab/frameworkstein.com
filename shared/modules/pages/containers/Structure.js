import _ from 'lodash'
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
import npmLink from '../../../lib/npmLink'

@connect(state => _.pick(state, 'config'), {})
export default class Structure extends Component {

  static propTypes = {
    config: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>

        <header>
          <h1>App Structure</h1>
        </header>

        <Grid fluid>
          <Row>
            <Col xs={8} xsOffset={2}>
              <blockquote>
                <div className="quote" />
                <p>The world was to me a secret which I desired to devine.</p>
                <footer>Mary Shelly, <cite>Frankenstein</cite></footer>
              </blockquote>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>
                What is Frameworkstein?
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
