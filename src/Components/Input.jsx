import React from 'react';

export default function Input({info}) {
  return (
    <div className='row justify-content-start align-items-center my-2' >
      <div className='col-lg-9' >
       <input id={info.id} type='number' className='form-control ' />
      </div>
    </div>
  )
}
