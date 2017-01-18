import _ from 'lodash' // eslint-disable-line
import React, {Component} from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'
import npmLink from '../../../lib/npmLink'

export default class Packages extends Component {

  render() {
    return (
      <div>

        <header>
          <h1>Included Packages</h1>
        </header>

        <Grid fluid>
          <Row>
            <Col xs={8} xsOffset={2}>
              <blockquote>
                <div className="quote" />
                <p>Nothing is so painful to the human mind as a great and sudden change.</p>
                <footer>Mary Shelly, <cite>Frankenstein</cite></footer>
              </blockquote>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h4>
                A new Frameworkstein app has dependencies on a bunch of other modules from the Node / React world.
              </h4>
              <p>We've mostly picked the most popular ones. They work pretty well.</p>

              <h2 className="subhead">
                Client
              </h2>
              <p className="small">
                Note that "client" here is a little misleading. All client code will also be run on your server when a page is requested.
                Check out <a href="https://medium.com/@mjackson/universal-javascript-4761051b7ae9" target="_blank">this post on universal js</a> for some more info.
              </p>
              <h3>{npmLink('react', 'React')}</h3>
              <p>{npmLink('react', 'React')} is why you're here, right?</p>

              <h3>{npmLink('redux', 'Redux')}</h3>
              <p>{npmLink('redux', 'Redux')} is a fluxxy thing that helps manage state in your React apps.</p>

              <h3>{npmLink('redux-form', 'Redux Form')}</h3>
              <p>{npmLink('redux-form', 'Redux Form')} helps out a bunch when dealing with user input.</p>

              <h3>{npmLink('immutable', 'Immutable')}</h3>
              <p>{npmLink('immutable', 'Immutable')} protects you from bugs caused by accidently messing with your redux store data.</p>

              <h3>{npmLink('react-router', 'React Router')}</h3>
              <p>{npmLink('react-router', 'React Router')} does routing for React apps (web only).</p>

              <h3>{npmLink('superagent', 'Superagent')}</h3>
              <p>{npmLink('superagent', 'Superagent')} is a great library for making http requests. We lock it to version 0.18.x, because after that the api was made less to our tase.</p>

              <h3>{npmLink('react-bootstrap', 'React Bootstrap')}</h3>
              <p>
                {npmLink('react-bootstrap', 'React Bootstrap')} is a bunch of react components for <a href="http://getbootstrap.com" target="_blank">Bootstrap</a>.
                You aren't locked to Boostrap by any means, but it's a nice place to start.
              </p>

              <h3>{npmLink('backbone-orm', 'BackboneORM')}</h3>
              <p>{npmLink('backbone-orm', 'BackboneORM')} is used to save your models.</p>
              <p>It has the same interface whether you're saving it over http (from the client) or to Mongo or Postgres (on the server)</p>


              <h2 className="subhead">Server</h2>
              <p className="small">
                These modules only run in Node, on your server (they won't get packaged up to run in the browser).
              </p>
              <h3>{npmLink('express', 'Express')}</h3>
              <p>{npmLink('express', 'Express')} makes it easy to serve up webpages and api routes from node.</p>

              <h3>{npmLink('backbone-rest', 'Backbone Rest')}</h3>
              <p>{npmLink('backbone-rest', 'Backbone Rest')} automatically creates a RESTful set of routes for your models.</p>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
