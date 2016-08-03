import _ from 'lodash'
import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

@connect(state => _.pick(state, 'config'), {})
export default class About extends Component {

  static propTypes = {
    config: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <h1>Included Packages</h1>
          </Col>
        </Row>
      </Grid>
    )
  }
}
