import _ from 'lodash'
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

@connect(state => _.pick(state, 'config'), {})
export default class Dir extends Component {

  static propTypes = {
    config: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>

        <header>
          <h1>Dir Frameworkstein</h1>
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
              <h2>
                What is Frameworkstein?
              </h2>

              <p>Frameworkstein isn't a framework. It's a collection of modules that work well and the glue to make them work well together.</p>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
