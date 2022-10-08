import React from 'react';
import LoginPageBtn from './LoginPageBtn';
export default function LoginPageBtns({listBtn,handleClick}) {
  return (
    <div className='row justify-content-center align-items-center ' >
    <div className='col-md-6 m-3' >
      {listBtn.map((item,index)=> <LoginPageBtn Btn={listBtn[index]} handleClick={handleClick} key={index} />)}
    </div>
  </div>
  )
}
