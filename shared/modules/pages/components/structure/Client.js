import _ from 'lodash' // eslint-disable-line
import React, {Component} from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {kimbieLight as style} from 'react-syntax-highlighter/dist/styles'

const renderJsStr =
`import React from 'react'
import {ReduxRouter} from 'redux-router'
import {render} from 'react-dom'
import createHistory from 'history/lib/createBrowserHistory'
import {Provider} from 'react-redux'
import {reduxReactRouter} from 'redux-router'
import {patchRouteEntry} from 'fl-react-utils'
import createStore from '../shared/createStore'

// no jQuery, backbone needs an ajax function
const Backbone = require('backbone')
Backbone.ajax = require('fl-backbone.nativeajax')

export default (getRoutes) => {
  const initialState = window.__INITIAL_STATE__
  const store = createStore(reduxReactRouter, patchRouteEntry(getRoutes), createHistory, initialState)

  render((
    <Provider store={store} key="provider">
      <ReduxRouter routes={getRoutes(store)} />
    </Provider>
  ), document.getElementById('react-view'))
}
`

export default class ClientDir extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>The client directory</h1>
        </header>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>The client directory</h2>
              <p>Frameworkstein's client code lives in two places. The first is the client directory. It contains:</p>
              <ul>
                <li>App styles (scss by default, but you could use less, stylus, etc instead)</li>
                <li>Bootstrap & Font Awesome configuration</li>
                <li>The entry point for our apps on the client</li>
              </ul>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <p className="text-center"><img src="/public/images/layout-client.jpg" style={{maxWidth: '100%'}} /></p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>App styles</h2>
              <p>This is where we store app styles. Organise it how you like. Having a file for a page or a component works well.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Bootstrap & Font Awesome configuration</h2>
              <p>
                <a href="https://github.com/twbs/bootstrap-sass">bootstrap-sass</a> and {' '}
                <a href="https://github.com/gowravshekar/font-awesome-webpack">font-awesome-webpack</a> are included by default.
              </p>
              <ul>
                <li><a href="https://github.com/twbs/bootstrap-sass">bootstrap-sass</a> - Bootstrap, with its variables in sass for easy editing.</li>
                <li><a href="https://github.com/gowravshekar/font-awesome-webpack">font-awesome-webpack</a> - svg icons that you can use instead of Glyphicons.</li>
              </ul>
              <p>
                The config files (<code>*.config.js</code>) for each are used by <Link to="/webpack">webpack</Link> to determine which parts of each to include in the client bundle.
              </p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>App entry points</h2>
              <p>
                The <code>app.js</code> file kicks off React to run the Frameworkstein app on the client
                (<code>admin.js</code> does the same for the <Link href="/admin">admin</Link> app).
              </p>
              <p>They import any styles needed and call the function exported by the other file here, <code>render.js</code>.</p>
              <p><code>render.js</code> sets up the Redux store and renders the React app.</p>

              <SyntaxHighlighter language="javascript" style={style}>{renderJsStr}</SyntaxHighlighter>
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
}
