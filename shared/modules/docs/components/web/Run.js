import _ from 'lodash' // eslint-disable-line
import React, {Component, PropTypes} from 'react'
import ReactMarkdown from 'react-markdown'
import {Grid, Row, Col} from 'react-bootstrap'

export default class About extends Component {

  render() {
    return (
      <Row>
        <Col xs={10} xsOffset={1}>
          <h2>
            Running a Frameworkstein web app
          </h2>

        </Col>
      </Row>
    )
  }
}
