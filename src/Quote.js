import React from 'react'
import Add from './Buttons/Add'

class Quote extends React.Component {
  render() {
    return (
      <>
        <div className="uk-container">
          <div className="uk-card uk-card-body uk-card-primary">
            <h1 id="text">"{this.props.quote}"</h1>
            <h4 id="author">- {this.props.author}</h4>
            <h6>{this.props.number}</h6>
            <button
              id="new-quote"
              onClick={() => this.props.onClick()}
              className='uk-button uk-button-default'
            >New quote!</button>
            <br />
            <div id="buttons" className='uk-margin'></div>
              <Add />
              <a href="#" className="uk-icon-button" uk-icon="icon: twitter"></a>
            </div>
        </div>
      </>
    );
  }
}

export default Quote
