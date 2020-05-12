import React from 'react'

const Quote2 = (props) => {

    return (
      <>
        <div className="uk-container">
          <div className="uk-card uk-card-body uk-card-primary">
            <h1 id="quote">"{props.quote}"</h1>
            <h4 id="author">- {props.author}</h4>
            <button
              id="new-quote"
              onClick={props.onClick}
              className='uk-button uk-button-default'
            >New quote!</button>
            <br />
            <div id="buttons" className='uk-margin'></div>
            {/* eslint-disable-next-line */}
              <a href="#" className="uk-icon-button" uk-icon="icon: twitter"></a>
            </div>
        </div>
      </>
    );
}

export default Quote2

