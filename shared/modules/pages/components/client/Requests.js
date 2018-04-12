import _ from 'lodash' // eslint-disable-line
import React, {Component} from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {foundation as style} from 'react-syntax-highlighter/dist/styles'
import npmLink from '../../../../lib/npmLink'


const actionSrc = `//actions.js
// Superagent
import request from superagent

export function loadTasks(callback) {
  return {
    type: 'GET_TASKS',
    request: request.get('/tasks'),
    callback, // This will be called when the request completes. Useful for navigating after a request returns (login, etc). Errors should not be handled here - an error action is sent, work with that.
  }
}


// BackboneORM
import Task from './models/task'

export function loadTasks(callback) {
  return {
    type: 'GET_TASKS',
    request: Task.cursor({active: true}),
    callback,
  }
}


// A custom function that takes a callback
export function loadTasks(callback) {
  return {
    type: 'GET_TASKS',
    request: callback => loadSomeThingsManually(callback),
    callback,
  }
}
`

const reducerSrc = `//reducer.js
const defaultState = {
  loading: false,
  models: {},
  modelList: [],
  error: null,
}

export default function reducer(state=defaultState, action={}) {

  switch (action.type) {
    case TYPES.GET_TASKS + '_START':
      return {loading: true, error: null, ...state}

    case TYPES.GET_TASKS + '_ERROR':
      return {loading: false, error: action.error, ...state}

    case TYPES.GET_TASKS + '_SUCCESS':
      return {
        loading: false,
        error: null,
        models: action.models,
        modelsList: action.modelList,
        ...state,
      })

    default:
      return state
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
                Requests
              </h2>

              <p>There are two parts to the Frameworkstein data loading story: <a href="/fetch-data">fetching data</a> for components when they load (routes in particular) and helpers for loading data with redux actions.</p>
              <p>We'll look at redux actions and <a href="https://github.com/founderlab/redux-request-middleware" target="_blank">redux-request-middleware</a> first.</p>

              <h4>
                How it works
              </h4>

              <p>After adding the middleware to redux, we can add a <code>request</code> property to redux actions. The middleware will run this request and dispatch an action when the request starts, completes or error.</p>

              <SyntaxHighlighter language="javascript" style={style}>{actionSrc}</SyntaxHighlighter>

              <p>The code above will dispatch the following:</p>

              <p><code>GET_TASKS_START</code> when the request is started. The action hs no extra information added at this point - it's the same as the one returned by the action creator.</p>
              <p><code>GET_TASKS_SUCCESS</code> when the requests completes with no error. The middleware adds the following properties to the action:</p>

              <div style={{marginLeft: 20, fontSize: 12}}>
                <p><code>model</code> the model loaded (defaults to the first model if a json array was received)</p>
                <p><code>models</code> an {'{id: model}'} map of loaded models</p>
                <p><code>modelList</code> an array of models loaded</p>
                <p><code>ids</code> an array of the ids of the models</p>
                <p><code>status</code> status code of the response</p>
                <p><code>res</code> the response object</p>
              </div>

              <p><code>GET_TASKS_ERROR</code> when the requests completes with an error. The action has an <code>error</code> property added with the error encountered.</p>

              <p>An example reducer to handle the above actions would look like:</p>

              <SyntaxHighlighter language="javascript" style={style}>{reducerSrc}</SyntaxHighlighter>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
