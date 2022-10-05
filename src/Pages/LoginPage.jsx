import React,{useState} from 'react';
import FirstBtns from '../Components/FirstBtns';

export default function LoginPage({handleClick ,listBtn}) {
  return (
    <div className='container-fluid my-div '>
      <div className='row justify-content-center align-items-center'>
       <div className='col-md-6 head-btn '>
       خریدار می شوید یا فروشنده؟
       </div>
      </div>
      <div className='row justify-content-center align-items-center ' >
        <div className='col-md-6 m-1' >
          {listBtn.map((item,index)=> <FirstBtns Btn={listBtn[index]} handleClick={handleClick} key={index} />)}
        </div>
      </div>
      <div className='row justify-content-center align-items-center'>
       <div className='col-md-6 foot-container '>
       خریدار: محصول میبینم خواستم میخرم،نقد میکنم <br/>
       فروشنده: محصول عرضه میکنم،نقد میشنوم، بهبود میدم
       </div>
      </div>
    </div>
  )
}
