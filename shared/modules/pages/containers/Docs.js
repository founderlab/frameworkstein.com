import _ from 'lodash'
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
import npmLink from '../../../lib/npmLink'
import WebDocs from '../../docs/components/web'

@connect(state => _.pick(state, 'config'), {})
export default class About extends Component {

  static propTypes = {
    config: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>

        <header>
          <h1>Frameworkstein: The Docs</h1>
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
            <Col xs={12} sm={10} smOffset={1}>

              <h2>Web apps (react)</h2>
              <ul>
                <li><a href="#web-run">Running a Frameworkstein web app</a></li>
              </ul>

              <h2>Mobile apps (react-native)</h2>
              <ul>
                <li><a href="#mobile-run">Running a Frameworkstein mobile app</a></li>
              </ul>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section" id="web-run">
          <WebDocs />
        </Grid>
      </div>
    )
  }
}
