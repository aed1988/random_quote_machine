import React from 'react'

class Quote extends React.Component {
  render() {
    return (
      <>
        <div class="uk-container">
          <div class="uk-card uk-card-body uk-card-primary">
            <h1 id="text">"{this.props.quote}"</h1>
            <h4 id="author">- {this.props.author}</h4>
            <h6>{this.props.number}</h6>
            <button
              id="new-quote"
              onClick={() => this.props.onClick()}
              className='uk-button uk-button-default'
            >New quote!</button>
            <br />
            <a href="twitter.com/intent/tweet">Tweet</a>
            </div>
        </div>
      </>
    );
  }
}

export default Quote
