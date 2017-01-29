import _ from 'lodash' // eslint-disable-line
import React, {Component} from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'

export default class ServerDir extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>The server directory</h1>
        </header>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>The server directory</h2>
              <p>Frameworkstein's server code lives here (surprise!).</p>
              <p>There's a bit more going on in this directory than the others:</p>
              <ul>
                <li>Express app</li>
                <li>API - controllers & templates</li>
                <li>Caching config</li>
                <li>Express routes for the client (React) apps</li>
                <li>Emailing functions and templates</li>
                <li>Session config</li>
                <li>Configuration</li>
                <li>Initialisation</li>
              </ul>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Express app</h2>
              <p>The entry point for the Node app.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <p className="text-center"><img src="/public/images/layout-server.jpg" style={{maxWidth: '100%'}} /></p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>API - controllers & templates</h2>
              <p>Backbone Rest controllers for a RESTful api. These take a model and auto generate <code>get</code> / <code>put</code> / <code>post</code> / <code>delete</code> routes for it.</p>
              <p>See <Link to="server/api">API</Link> for more info.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Caching config</h2>
              <p>Set up query caching for the API. Set up caches that can be used to cache other data.</p>
              <p>Can cache data in-memory or with <a href="https://redislabs.com/" target="_blank">Redis</a>.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Express routes for the client (React) apps</h2>
              <p>The clientApps directory contains a file per client React app. These will handle their routes by running their respective React app, rendering the html produced and sending that off.</p>
              <p>See <Link to="/client/universal">unversal js</Link> for more info.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Emailing functions and templates</h2>
              <p>Functions here will render an email body to a string and send it to some recipients.</p>
              <p>There's a couple of plain js templates included for basic emails.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Session config</h2>
              <p>Setup for <a href="https://github.com/expressjs/session" target="_blank">express-session</a>.</p>
              <p>Can cache data in-memory or with <a href="https://redislabs.com/" target="_blank">Redis</a>.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Configuration</h2>
              <p>
                App configuration. Try to stick to the <a href="https://12factor.net/" target="_blank">Twelve-Factor App</a> recommendations
                and populate this config via environment variables.
              </p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Initialisation</h2>
              <p>
                <code>initialise.js</code> has some random initialisation junk - massage database urls if they're provided as environment
                variables we don't recognise (by default it handles Amazon Elastic Beanstalk's RDS format here).
              </p>
              <p>
                <code>initDB.js</code> will make a fair effort to ensure that your postgres schema is up to date, and populate it with default data if it's empty.
              </p>
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
}
