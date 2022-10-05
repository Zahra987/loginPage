import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai';
import {CgEnter} from 'react-icons/cg';
export default function EnterInfo({handleClick,info}) {
  return (
    <form>
      <div className='container-fluid my-div'>
      <div className='row justify-content-center align-items-center' >
        <div className='col-sm-6 p-4' >
          <div className='row justify-content-center align-items-center my-2 ' >
            <div className='col' >
             <div className='head-info' >
              <AiOutlineArrowRight onClick={handleClick} className='arrow-icon' />
             </div>
            </div>
          </div>
          <div className='row justify-content-center align-items-center my-2' >
            <div className='col' >
             <div className='info-text' >
             <CgEnter/> {info.titr}  <br/> 
              کاربر محترم برای ورود لطفا شماره موبایل خود را وارد نمایید
             </div>
            </div>
          </div>
          <div className='row justify-content-start align-items-center my-2' >
            <div className='col-sm-9' >
             <input id={info.id} type='number' className='form-control ' />
            </div>
          </div>
          <div className='row justify-content-start align-items-center my-2' >
            <div className='col-sm-9' >
             <button type='submit' className='form-control btn btn-secondary ' > ثبت نام</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  )
}
