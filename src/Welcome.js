import React from 'react'

class Welcome extends React.Component {
  render() {
    return (
      <>
        <div className="uk-container">
          <div className="uk-card uk-card-body uk-card-primary">
            <h1>Welcome</h1>
            <button
              id="welcome"
              onClick={() => this.props.onClick()}
              className='uk-button uk-button-default'
            >New quote!</button>
          </div>
        </div>
      </>
    )
  }
}

export default Welcome
