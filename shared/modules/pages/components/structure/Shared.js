import _ from 'lodash' // eslint-disable-line
import React, {Component} from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'

export default class SharedDir extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>The shared directory</h1>
        </header>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>The shared directory</h2>
              <p>Frameworkstein's main React / Redux app lives here.</p>
              <p>We put it in <code>shared</code> rather than <code>client</code> because it's also used by our Node app to render pages on the server.</p>
              <p>See the entry on <Link to="/shared/universal">universal js</Link> for more details of how this works.</p>
              <p>Stuff in here:</p>
              <ul>
                <li><b>Client</b> models</li>
                <li>Model schemas (these are also used by the server models)</li>
                <li>React components</li>
                <li>Redux actions</li>
                <li>Redux reducers</li>
                <li>Redux store creation</li>
                <li>App routes</li>
                <li>Admin configuration</li>
              </ul>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <p className="text-center"><img src="/public/images/layout-shared.jpg" style={{maxWidth: '100%'}} /></p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Client models</h2>
              <p>This directory contains BackboneORM model classes for each data model used on the client.</p>
              <p>These models can perform CRUD requests to get/change their respective data. See the <a href="/shared/orm">orm</a> section for more.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Model schemas</h2>
              <p>Define model data fields here.</p>
              <p>
                These schemas are also used by the <b>server</b> models to define their schemas.
                The server models use this schema to, for example, determine which columns are created or queried on in postgres.
                See the <a href="/shared/orm">orm</a> section for more.
              </p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Modules</h2>
              <p>
                <a target="_blank" href="https://facebook.github.io/react/docs/components-and-props.html">React components</a>,{' '}
                <a target="_blank" href="http://redux.js.org/docs/basics/Actions.html">Redux actions</a> and{' '}
                <a target="_blank" href="http://redux.js.org/docs/basics/Reducers.html">Redux reducers</a> are grouped into <code>modules</code> and placed here.
              </p>
              <p>
                This is where most of your app-specific code lives. See the <Link to="/client/modules">modules page</Link> for more information.
              </p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Redux store creation</h2>
              <p>The <a href="http://redux.js.org/docs/basics/Store.html">Redux store</a> is created via a bit of boilerplate in <code>createStore.js</code>.</p>
              <p>Some custom middleware is added here to enable automatic request dispatching. Again, see <Link to="/client/requests">handling requests</Link> for more.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>App routes</h2>
              <p><code>routes.js</code> is where the routes live. Frameworkstein uses <a href="https://github.com/ReactTraining/react-router">react-router</a> for this.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Admin configuration</h2>
              <p><code>configureAdmin.js</code> tells <Link to="/admin">fl-admin</Link> which models we want to generate an admin page for and how these pages should function.</p>
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
}
