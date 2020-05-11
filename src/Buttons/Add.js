import React, {useState} from 'react'

const Add = (props) => {

  const [newQuote, setNewQuote] = useState(''),
        [newAuthor, setNewAuthor] = useState('');

  

  return (
    <>
      <a href="#modal-example" className="uk-icon-button uk-margin-small-right" uk-icon="icon: plus" uk-toggle="target: #modal-example"></a>
      <div id="modal-example" className='uk-modal-body' uk-modal='true'>
        <form className="uk-modal-dialog uk-modal-body">
            <fieldset className="uk-fieldset uk-modal-title">

                <legend className="uk-legend">Add a new Quote</legend>

                <div className="uk-margin">
                    <textarea className="uk-textarea" rows="2" placeholder="Write your quote here..." onChange={(e) => setNewQuote(e.target.value)} required></textarea>
                </div>

                <div className="uk-margin">
                    <input className="uk-input" type="text" placeholder="Author" onChange={(e) => setNewAuthor(e.target.value)} required/>
                </div>

                <p className="uk-text-right">
                  <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                  <button id="submit" className="uk-button uk-button-primary" type="button">Submit</button>
                </p>

            </fieldset>
        </form>
      </div>
    </>
  )
}

export default Add
