import React from 'react';
export default function FirstBtns({Btn,handleClick}) {
  return (
    <div
      onClick={(e)=>{
        handleClick(Btn);
      }}
      className='row rounded justify-content-center align-items-center my-1 bg-white ' >
            <div className='col-9 v-kh-f ' >
            {Btn.typebtn}
            </div>
            <div className='col-3 v-kh-f' >
             {Btn.icon}
            </div>
          </div>
  )
}
