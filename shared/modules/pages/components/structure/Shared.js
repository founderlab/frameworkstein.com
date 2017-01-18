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
              <h2>React components</h2>
              <p>React components - the guts of the app - live here.</p>
              <p>We divide them up into two categories: <b>smart</b> and <b>dumb</b> components.</p>

              <h3>Smart components</h3>
              <p>Smart components are totes woke. They are aware of the existence of a world outside of themselves.</p>
              <p>They are <b>connected</b> to the redux store, can dispatch Redux <b>actions</b>, and get a chance to load any data they might need before being rendered.</p>
              <p>If you're familiar with MVC, they are most like a controller. Their render method will render a dumb component and give it whatever data and functions it needs to do the diry work. They shouldn't render any html.</p>

              <h3>Dumb components</h3>
              <p>Dumb components don't know anything about where their props come from (and they don't really care).</p>
              <p>They get some data from their props and display some html. When something happens, they might have a function prop to call.</p>
              <p>If they're feeling really adventurous, they might manage some internal state.</p>
              <p>These are more like a view in MVC. All app html lives in dumb components.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Redux actions</h2>
              <p>Redux <a href="http://redux.js.org/docs/basics/Actions.html">action creators</a> are the next big thing in a module. They'll be dispatched to do such fun things as load some data from the server, or save some changes to a model.</p>
              <p>Actions often have an asynchronous function to complete - see how Frameworkstein handles this on the <Link to="/requests">handling requests</Link> page.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Redux reducers</h2>
              <p>Redux <a href="http://redux.js.org/docs/basics/Reducers.html">reducers</a> handle the actions created above and modify our <a href="http://redux.js.org/docs/basics/Store.html">Redux store</a> accordingly.</p>
              <p>See <Link to="/requests">handling requests</Link> for more information about the actions to be handled here.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Redux store creation</h2>
              <p>The <a href="http://redux.js.org/docs/basics/Store.html">Redux store</a> is created via a bit of boilerplate in <code>createStore.js</code>.</p>
              <p>Some custom middleware is added here to enable automatic request dispatching. Again, see <Link to="/requests">handling requests</Link> for more.</p>
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
