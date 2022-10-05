import React from 'react';
import Button from '../Components/Button';
import EnterInfoHeader from '../Components/EnterInfoHeader';
import Input from '../Components/Input';

export default function EnterInfo({handleClick,info}) {
  return (
    <form>
      <div className='container-fluid mydiv ' >
       <div className='row justify-content-center align-items-center ' >
        <div className='col-sm-7 col-lg-5  p-4 my-5' >
          <EnterInfoHeader info={info} handleClick={handleClick} />
          <Input info={info} />
          <Button info={info} />
        </div>
       </div>
      </div>
    </form>
  )
}
