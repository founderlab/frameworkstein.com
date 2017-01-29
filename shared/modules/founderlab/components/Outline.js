import _ from 'lodash' // eslint-disable-line
import React, {Component} from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import npmLink from '../../../lib/npmLink'

const md = `
#### 1. Project Scope
  - We meet and scope out your project.
  - You provide with FL some rough wireframes of the pages / screens of your app (pencil/paper is fine).
  - You fill in the user stories MoSCoW spreadsheet.
  - We meet and discuss which user stories will be part of the project.
  - FL creates a Trello board, Bitbucket repository and invites you to the FL Slack channel.

#### 2. Development
  - FL may create some more detailed wireframes - we meet and to confirm them if so.
  - FL starts development of the app.
  - We meet regularly (weekly or biweekly) and work through any questions, etc.

#### 3. Testing
  - You'll create an Amazon Web Services (AWS) account and apply for AWS credit.
  - FL will host your website / app backend there.
  - FL will create a verson of your app / website for you to test.
  - FL makes any final bugfixes / changes.

#### 4. Handoff
  - App
    - FL will deploy your app backend to your AWS account.
    - I'll give you the source for your app.
    - You'll need:
      - A website domain.
      - To be responsible for submitting your app to the app store / play store.
      - An app store icon, screenshots, description, etc.
      - To populate your app with any content (written, images or video) it needs, via the admin panel.
      - A developer on hand (whether you, an employee, a contractor) to manage your app
        submission and ensure that everything keeps working with your app backend.

  - Website
    - FL will deploy your website to your AWS account and hook up your domain.
    - You'll need:
      - A website domain.
      - Any content (written, images or video) your app needs.
      - To populate your app with any content (written, images or video) it needs, via the admin panel.
      - A developer on hand (whether you, an employee, a contractor) to make any further changes,
        fix any problems that come up and generally keep your site running.
`

export default class Outline extends Component {

  render() {
    return (
      <div>

        <header>
          <h1>FounderLab Program Outline</h1>
        </header>

        <Grid fluid className="section">
          <Row>
            <Col xs={10} xsOffset={1}>
              <h2>
                FounderLab Program Outline
              </h2>
              <br />
              <br />
              <ReactMarkdown escapeHtml source={md} className="markdown" />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
