import React from 'react';

export default function Input({info,formik}) {
  return (
    <div className='row justify-content-start align-items-center my-2' >
      <div className='col-lg-9' >
       <input id={info.id} 
          name="phoneNumber"
          className='form-control' 
          onChange={formik.handleChange} 
          type="string"
          value={formik.values.phoneNumber}
          />
          {formik.errors.phoneNumber ? <div className="error-div mt-1" >{formik.errors.phoneNumber}</div> : null}
      </div>
    </div>
  )
}
