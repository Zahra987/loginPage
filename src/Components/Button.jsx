import React from 'react';

export default function Button({info}) {
  return (
    <div className='row justify-content-start align-items-center my-2' >
      <div className='col-sm-9' >
        <button type='submit' className='form-control btn btn-secondary '> {info.btn} </button>
      </div>
    </div>
  )
}
