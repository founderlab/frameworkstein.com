import _ from 'lodash' // eslint-disable-line
import React, {Component} from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {kimbieLight as style} from 'react-syntax-highlighter/dist/styles'
import npmLink from '../../../../lib/npmLink'

const rendererSrc = `// server/clientApps/app.js
import _ from 'lodash'
import {createServerRenderer} from 'fl-react-server'
import config from '../config'
import createStore from '../../shared/createStore'
import getRoutes from '../../shared/routes'

export default createServerRenderer({
  createStore,
  getRoutes,
  omit: 'admin',
  alwaysFetch: require('../../shared/modules/app/containers/App'),
  config: _.pick(config, config.clientConfigKeys),
})
`

const indexSrc = `// server/clientApps/index.js
import admin from './admin'
import app from './app'

export default (options) => {
  if (!options.app) throw new Error('clientApps init: Missing app from options')
  options.app.get('/admin*', admin)
  options.app.get('*', app)
}
`

export default class Packages extends Component {

  render() {
    return (
      <div>

        <header>
          <h1>Universal JavaScript</h1>
        </header>

        <Grid fluid>
          <Row>
            <Col xs={8} xsOffset={2}>
              <blockquote>
                <div className="quote" />
                <p>Nothing contributes so much to tranquillize the mind as a steady purpose.</p>
                <footer>Mary Shelly, <cite>Frankenstein</cite></footer>
              </blockquote>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h3>
                Universal JavaScript apps
              </h3>
              <p className="small">
                Otherwise known as <i>Isomorphic JavaScript</i>
              </p>
              <p>A Universal JavaScript app is able to be run on the server (Node) as well as the client (Browser).</p>
              <p>This means that the server will, when receiving a request for a page, run the client app and render out the pages complete html to ship to the client.</p>
              <p>The client will then run the same JavScript. React will see that there's already a rendered dom tree and happily continue to use it.</p>
              <p>See <a href="https://strongloop.com/strongblog/node-js-react-isomorphic-javascript-why-it-matters" target="_blank">this strongloop post</a> for more information.</p>
              <p>See <a href="https://medium.com/@mjackson/universal-javascript-4761051b7ae9" target="_blank">this post on the term "universal"</a> for why we're using two different words for it.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h3>
                How Fameworkstein renders React on the server
              </h3>
              <p></p>

              <p>A server renderer - an express route handler that can render a React app - is created by <code>createServerRenderer</code> from {npmLink('fl-react-server')}.</p>
              <SyntaxHighlighter language="javascript" style={style}>{rendererSrc}</SyntaxHighlighter>

              <p>A wildcard route is registered with Express (after all other routes, as a catchall) that calls the server renderer.</p>
              <SyntaxHighlighter language="javascript" style={style}>{indexSrc}</SyntaxHighlighter>

              <p>That's it!</p>
              <p>Well, there's a bit more, but you can look at {npmLink('fl-react-server')} for details of the dirty work.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
