import React from 'react'

class Quote extends React.Component {
  render() {
    return (
      <div>
        <h1 id="text">"{this.props.quote}"</h1>
        <h4 id="author">- {this.props.author}</h4>
        <h6>{this.props.number}</h6>
        <button
          id="new-quote"
          onClick={() => this.props.onClick()}
          className='effect effect-1'
        >New quote!</button>
        <br />
        <a href="twitter.com/intent/tweet">Tweet</a>
      </div>
    );
  }
}

export default Quote
