import React from 'react'

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <button 
          onClick={this.props.onClick}
          className='effect effect-1'
        >New quote!</button>
      </div>
    )
  }
}

export default Welcome
