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
    this.state = {docs: props.docsExpanded}
  }

  toggleSectionFn = name => () => {
    this.setState({[name]: !this.state[name]})
  }

  render() {

    return (
      <div>
        <div className="profile">
          <Link to="/">
            <img src="/public/images/avatar.jpg" />
          </Link>
          <p>
            <Link to="/" className="profile-name">
              Frameworkstein
            </Link>
          </p>
        </div>

        <Nav bsStyle="pills" stacked>
          <LinkContainer to="/" onlyActiveOnIndex><NavItem>Home</NavItem></LinkContainer>
          <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
          <LinkContainer to="/packages"><NavItem>Included Packages</NavItem></LinkContainer>
          <LinkContainer to="/structure"><NavItem>App Structure</NavItem></LinkContainer>

          <NavItem onClick={this.toggleSectionFn('docs')}>Docs</NavItem>
        </Nav>

        {this.state.docs && (
          <Nav bsStyle="pills" stacked>
            <LinkContainer to="/docs/fl-auth-server"><NavItem>Auth (server)</NavItem></LinkContainer>
            <LinkContainer to="/docs/fl-auth-react"><NavItem>Auth (react helpers)</NavItem></LinkContainer>
            <LinkContainer to="/docs/fl-auth-redux"><NavItem>Auth (redux helpers)</NavItem></LinkContainer>

            <LinkContainer to="/docs/fl-react-server"><NavItem>React server</NavItem></LinkContainer>
            <LinkContainer to="/docs/fl-react-utils"><NavItem>React utils</NavItem></LinkContainer>
            <LinkContainer to="/docs/fl-redux-utils"><NavItem>Redux utils</NavItem></LinkContainer>
            <LinkContainer to="/docs/fl-server-utils"><NavItem>Server utils</NavItem></LinkContainer>
            <LinkContainer to="/docs/fl-utils"><NavItem>General utils</NavItem></LinkContainer>
          </Nav>
        )}
      </div>
    )
  }
}
