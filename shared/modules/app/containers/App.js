import _ from 'lodash' // eslint-disable-line
import Queue from 'queue-async'
import React, {Component, PropTypes} from 'react'
import Helmet from 'react-helmet'
import {connect} from 'react-redux'
import {Sidebar} from 'fl-react-utils'
import SidebarContent from '../components/SidebarContent'
import headerTags from '../headerTags'
import {loadAppSettings} from '../actions'
import {loadActiveProfile} from '../../users/profileActions'

@connect(state => ({config: state.config}))
export default class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    config: PropTypes.object.isRequired,
  }

  static childContextTypes = {
    publicPath: React.PropTypes.string,
    s3Url: React.PropTypes.string,
  }

  constructor() {
    super()
    this.state = {}
  }

  getChildContext() {
    return {publicPath: this.state.publicPath, s3Url: this.state.s3Url}
  }

  componentWillMount() {
    if (!this.state.s3Url) this.setState({publicPath: this.props.config.get('publicPath'), s3Url: this.props.config.get('s3Url')})
  }

  render() {
    const name = this.props.config.get('name')
    return (
      <div id="app-view">
        <Sidebar sidebar={<SidebarContent />}>
          <Helmet
            title=""
            titleTemplate={`%s - ${name}`}
            {...headerTags(this.props)}
          />
          {this.props.children}
        </Sidebar>
      </div>
    )
  }
}
