import _ from 'lodash' // eslint-disable-line
import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'
import {Nav, NavItem} from 'react-bootstrap'

export default class Sidebar extends Component {

  static propTypes = {
    docsExpanded: PropTypes.bool,
  }

  constructor(props) {
    super()
    this.state = {
      docs: props.docsExpanded,
    }
  }

  toggleSectionFn = name => () => {
    this.setState({[name]: !this.state[name]})
  }

  render() {
    return (
      <div>
        <div className="profile">
          <div className="avatar">
            <Link to="/">
              <img src="/public/frankie-pixel-peep.svg" />
            </Link>
          </div>
          <p>
            <Link to="/" className="profile-name">
              Frameworkstein
            </Link>
          </p>
        </div>

        <Nav bsStyle="pills" stacked>
          <LinkContainer to="/" onlyActiveOnIndex><NavItem>Home</NavItem></LinkContainer>
          {/*<LinkContainer to="/start"><NavItem>Getting Started</NavItem></LinkContainer>*/}
          {/*<LinkContainer to="/run"><NavItem>Running the apps</NavItem></LinkContainer>*/}

          <li role="presentation">
            <a onClick={this.toggleSectionFn('dirs')}>App structure</a>

            {this.state.dirs && (
              <Nav bsStyle="pills" stacked>
                {/*<LinkContainer to="/dirs/overview"><NavItem>Overview</NavItem></LinkContainer>*/}
                <LinkContainer to="/dirs/client"><NavItem>Client</NavItem></LinkContainer>
                <LinkContainer to="/dirs/shared"><NavItem>Shared</NavItem></LinkContainer>
                <LinkContainer to="/dirs/server"><NavItem>Server</NavItem></LinkContainer>
              </Nav>
            )}
          </li>

          <li role="presentation">
            <a onClick={this.toggleSectionFn('client')}>Client</a>

            {this.state.client && (
              <Nav bsStyle="pills" stacked>
                <LinkContainer to="/shared/universal"><NavItem>Universal js</NavItem></LinkContainer>
                <LinkContainer to="/shared/modules"><NavItem>Modules</NavItem></LinkContainer>
                <LinkContainer to="/shared/redux"><NavItem>Redux</NavItem></LinkContainer>
                <LinkContainer to="/shared/routes"><NavItem>Routes</NavItem></LinkContainer>
                <LinkContainer to="/shared/request"><NavItem>Data Requests</NavItem></LinkContainer>
              </Nav>
            )}
          </li>

          <li role="presentation">
            <a onClick={this.toggleSectionFn('server')}>Server</a>

            {this.state.server && (
              <Nav bsStyle="pills" stacked>
                <LinkContainer to="/server/data"><NavItem>Databases & models</NavItem></LinkContainer>
                <LinkContainer to="/server/api"><NavItem>Rest api</NavItem></LinkContainer>
              </Nav>
            )}
          </li>

          <li role="presentation">
            <a onClick={this.toggleSectionFn('mobile')}>Native</a>

            {this.state.mobile && (
              <Nav bsStyle="pills" stacked>
                <LinkContainer to="/mobile"><NavItem>Differences from the web app</NavItem></LinkContainer>
              </Nav>
            )}
          </li>

          <li role="presentation">
            <a onClick={this.toggleSectionFn('docs')}>Readmes</a>

            {this.state.docs && (
              <Nav bsStyle="pills" stacked>
                <LinkContainer to="/docs/fl-auth-server"><NavItem>fl-auth-server</NavItem></LinkContainer>
                <LinkContainer to="/docs/fl-auth-react"><NavItem>fl-auth-react</NavItem></LinkContainer>
                <LinkContainer to="/docs/fl-auth-redux"><NavItem>fl-auth-redux</NavItem></LinkContainer>

                <LinkContainer to="/docs/fl-react-server"><NavItem>fl-react-server</NavItem></LinkContainer>
                <LinkContainer to="/docs/fl-react-utils"><NavItem>fl-react-utils</NavItem></LinkContainer>
                <LinkContainer to="/docs/fl-redux-utils"><NavItem>fl-redux-utils</NavItem></LinkContainer>
                <LinkContainer to="/docs/fl-server-utils"><NavItem>fl-server-utils</NavItem></LinkContainer>
                <LinkContainer to="/docs/fl-utils"><NavItem>fl-utils</NavItem></LinkContainer>
              </Nav>
            )}
          </li>

          <LinkContainer to="/packages"><NavItem>Included Packages</NavItem></LinkContainer>

        </Nav>
      </div>
    )
  }
}
