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
          <h1>Requests</h1>
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
              <h2>
                Coming soon, sorry
              </h2>
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
}
