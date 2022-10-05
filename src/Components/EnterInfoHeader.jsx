import React from 'react';
import {CgEnter} from 'react-icons/cg';
import {AiOutlineArrowRight} from 'react-icons/ai';

export default function EnterInfoHeader({info,handleClick}) {
  return (
    <>
       <div className='row justify-content-center align-items-center my-2' >
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
    </>
  )
}
