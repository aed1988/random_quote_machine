import React from 'react'

const Add = () => {
  return (
    <>
      <a href="#modal-example" className="uk-icon-button uk-margin-small-right" uk-icon="icon: plus" uk-toggle="target: #modal-example"></a>
      <div id="modal-example" className='uk-modal-body' uk-modal='true'>
        <form className="uk-modal-dialog uk-modal-body">
            <fieldset className="uk-fieldset uk-modal-title">

                <legend className="uk-legend">Add a new quote</legend>

                <div className="uk-margin">
                    <textarea className="uk-textarea" rows="2" placeholder="Write the quote here..." required></textarea>
                </div>

                <div className="uk-margin">
                    <input className="uk-input" type="text" placeholder="Name" required/>
                </div>

                <p className="uk-text-right">
                  <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                  <button className="uk-button uk-button-primary" type="button">Save</button>
                </p>

            </fieldset>
        </form>
      </div>
    </>
  )
}

export default Add
