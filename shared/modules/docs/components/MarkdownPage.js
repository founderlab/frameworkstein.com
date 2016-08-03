import _ from 'lodash' // eslint-disable-line
import React, {Component, PropTypes} from 'react'
import ReactMarkdown from 'react-markdown'
import {Grid, Row, Col} from 'react-bootstrap'

export default class Readme extends Component {

  static propTypes = {
    markdown: PropTypes.string.isRequired,
  }

  render() {
    const {markdown} = this.props

    return (
      <Grid fluid className="markdown">
        <Row>
          <Col xs={12}>
            <ReactMarkdown source={markdown} />
          </Col>
        </Row>
      </Grid>
    )
  }
}
