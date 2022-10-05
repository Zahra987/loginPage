import React from 'react';
import LoginPageBtn from '../Components/LoginPageBtns';
import LoginPageFooter from '../Components/LoginPageFooter';
import LoginPageHeader from '../Components/LoginPageHeader';

export default function LoginPage({handleClick ,listBtn}) {
  return (
    <div className='container-fluid mydiv '>
      <LoginPageHeader/>
      <LoginPageBtn listBtn={listBtn} handleClick={handleClick} />
      <LoginPageFooter/>
    </div>
  )
}
