import _ from 'lodash' // eslint-disable-line
import React, {Component} from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'

export default class Packages extends Component {

  render() {
    return (
      <div>

        <header>
          <h1>The <i>modules</i> directory</h1>
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
                The <code>modules</code> directory
              </h2>
              <p className="small">
                Located in <code>shared/modules</code>
              </p>
              <p>By convention, Frameworkstein apps group related{' '}
                <a target="_blank" href="https://facebook.github.io/react/docs/components-and-props.html">React components</a>,{' '}
                <a target="_blank" href="http://redux.js.org/docs/basics/Actions.html">Redux actions</a> and{' '}
                <a target="_blank" href="http://redux.js.org/docs/basics/Reducers.html">Redux reducers</a> into modules.
              </p>
              <p>These modules live, amazingly, in the <code>modules</code> directory.</p>
              <p>For example, the <code>jobs</code> module may contain actions to create, edit and delete jobs; a reducer that stores the currently loaded job models, and a <code>JobEdit</code> component for job editing.</p>
              <p>Here's the shared directory again for reference. We're looking at the blue bits.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={10} xsOffset={1}>
              <p className="text-center"><img src="/public/images/layout-shared.jpg" style={{maxWidth: '100%'}} /></p>
            </Col>
          </Row>

        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>React components</h2>
              <p>React components - the guts of the app - live here.</p>
              <p>We divide them up into two categories: <b>smart</b> and <b>dumb</b> components.</p>

              <h3>Smart components</h3>
              <p>Smart components are totes woke. They are aware of the existence of a world outside of themselves.</p>
              <p>They are <b>connected</b> to the redux store, can dispatch Redux <b>actions</b>, and get a chance to load any data they might need before being rendered.</p>
              <p>If you're familiar with MVC, they are most like a controller. Their render method will render a dumb component and give it whatever data and functions it needs to do the diry work. They shouldn't render any html.</p>

              <h3>Dumb components</h3>
              <p>Dumb components don't know anything about where their props come from (and they don't really care).</p>
              <p>They get some data from their props and display some html. When something happens, they might have a function prop to call.</p>
              <p>If they're feeling really adventurous, they might manage some internal state.</p>
              <p>These are more like a view in MVC. All app html lives in dumb components.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Redux actions</h2>
              <p>Redux <a href="http://redux.js.org/docs/basics/Actions.html">action creators</a> are the next big thing in a module. They'll be dispatched to do such fun things as load some data from the server, or save some changes to a model.</p>
              <p>Actions often have an asynchronous function to complete - see how Frameworkstein handles this on the <Link to="/client/requests">handling requests</Link> page.</p>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>Redux reducers</h2>
              <p>Redux <a href="http://redux.js.org/docs/basics/Reducers.html">reducers</a> handle the actions created above and modify our <a href="http://redux.js.org/docs/basics/Store.html">Redux store</a> accordingly.</p>
              <p>See <Link to="/client/requests">handling requests</Link> for more information about the actions to be handled here.</p>
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
}
