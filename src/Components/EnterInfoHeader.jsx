import React from 'react';
import {CgEnter} from 'react-icons/cg';
import {AiOutlineArrowRight} from 'react-icons/ai';

export default function EnterInfoHeader({info,handleClick}) {
  return (
    <>
       <div className='row justify-content-center align-items-center my-2' >
          <div className='col' >
            <div >
             <AiOutlineArrowRight onClick={handleClick} className='arrow-icon' />
            </div>
          </div>
       </div>
       <div className='row justify-content-center align-items-center my-2' >
          <div className='col' >
            <div className="infi-text-header" >
              {info.titr} <CgEnter/><br/> 
              <div className='enter-info-header-text' >کاربر محترم برای ورود لطفا شماره موبایل خود را وارد نمایید</div>
            </div>
          </div>
       </div>
    </>
  )
}
