import _ from 'lodash' // eslint-disable-line
import React, {Component} from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {foundation as style} from 'react-syntax-highlighter/dist/styles'
import npmLink from '../../../../lib/npmLink'


const routeSrc = `// shared/routes.js
//... other routes
      <Route path="mypage" component={require('./modules/mypage/containers/MyPage')} />
//... etc
`

const componentSrc = `// shared/modules/mypage/containers/MyPage.js
import React from 'react'

export default class MyPageContainer extends React.Component {

  // Middleware will call this method on each route change
  // The store is provided, we can get the current state of the router from it via redux-router
  // We'll also need its dispatch method to dipatch actions from here
  // The callback argument provided here is used on the server to determine if a page has loaded successfully
  static fetchData({store, action}, callback) {

    // As is the current action if we're transitioning between routes. 'action.payload' contains the props for the route we're transitioning to. Here for example we're getting router.params.id from it
    const {router} = store.getState()
    const id = ((action && action.payload && action.payload.params) || router.params).id

    // Our 'loadMyPageContent' action takes a callback, which is automatically called when the request resolves. We'll look at how that works below
    store.dispatch(loadMyPageContent((err, action) => {

      // We can return an error if something went wrong
      if (err) return callback(err)

      // Or a status code for other things if we want to be specific, here it's a 404 if the content isn't found
      if (!action.res) return callback(null, {status: 404})

      // No arguments means everything loaded just fine
      callback()
    }))
  }

  // ...rest of the component goes below

  render() {
    // ...etc
  }
}
`

export default class Requests extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>Requests</h1>
        </header>

        <Grid fluid>
          <Row>
            <Col xs={8} xsOffset={2}>
              <blockquote>
                <div className="quote" />
                <p>Nothing contributes so much to tranquillize the mind as a steady purpose.</p>
                <footer>Mary Shelly, <cite>Frankenstein</cite></footer>
              </blockquote>
            </Col>
          </Row>
        </Grid>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>
                fetchData
              </h2>

              <p>Frameworkstein smart components (containers) use a convention for loading data from an external source (like say, your server). If a container referenced by a route has a static method called <code>fetchData</code>, it will be called when that route is visited.</p>

              <SyntaxHighlighter language="javascript" style={style}>{routeSrc}</SyntaxHighlighter>
              <SyntaxHighlighter language="javascript" style={style}>{componentSrc}</SyntaxHighlighter>

              <h2>
                How it works
              </h2>

              <p>This works via middleware provided by the <a href="https://github.com/founderlab/fetch-component-data">fetch-component-data</a> module. We rely on <a href="https://github.com/acdlite/redux-router" target="_blank">redux-router</a> sending actions for each route change (this interaction is the reason for sticking with redux-router rather than react-router-redux).</p>
              <p>When rendering on the server we can delay rendering until all data is loaded. When rendering on the client the page transition will occur while the fetchData method is running.</p>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
