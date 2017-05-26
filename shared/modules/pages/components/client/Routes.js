import _ from 'lodash' // eslint-disable-line
import React, {Component} from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'

export default class Packages extends Component {

  render() {
    return (
      <div>

        <header>
          <h1>Routing</h1>
        </header>

        <Grid fluid>
          <Row>
            <Col xs={8} xsOffset={2}>
              <blockquote>
                <div className="quote" />
                <p>Thus strangely are our souls constructed, and by slight ligaments are we bound to prosperity and ruin.</p>
                <footer>Mary Shelly, <cite>Frankenstein</cite></footer>
              </blockquote>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>
                Routing
              </h2>
              <p className="small">
                Thanks react-router!
              </p>
              <p><a target="_blank" href="https://reacttraining.com/react-router">React Router</a> handles navigation between pages in Frameworkstein apps.</p>
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
}
