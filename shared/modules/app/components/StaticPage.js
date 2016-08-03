import _ from 'lodash' // eslint-disable-line
import React, {Component, PropTypes} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

export default class StaticPage extends Component {

  static propTypes = {
    page: PropTypes.object.isRequired,
  }

  render() {
    const {page} = this.props
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{__html: page.content}} />
          </Col>
        </Row>
      </Grid>
    )
  }
}
