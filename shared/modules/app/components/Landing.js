import React from 'react'

export default class Landing extends React.Component {

  render() {
    return (
      <div>
        <header>
          <h1>It's alive!</h1>

          <br />
          <br />

          <div className="profile-avatar">
            <img src="/public/frankie-pixel-peep.svg" />
          </div>

          <p>Rarr</p>
        </header>
      </div>
    )
  }
}
