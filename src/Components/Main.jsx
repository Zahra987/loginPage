import React, { useState } from 'react';
import EnterInfo from '../Pages/EnterInfo';
import LoginPage from '../Pages/LoginPage';
import {RiUserAddFill } from 'react-icons/ri';
import {FaStore} from 'react-icons/fa';
import {CgEnter} from 'react-icons/cg';

export default function Main() {
  const [info,setInfo]=useState({});
  const [listBtn]= useState([{icon:<CgEnter/>, typebtn:'ورود' ,id:'enter', titr:'ورود'},{icon:<RiUserAddFill/>, typebtn:'خریدارم' ,id:'costomer', titr:'ثبت نام خریدار'},{icon:<FaStore/>, typebtn:'فروشندم',id:'seller', titr:'ثبت نام فروشنده'}])
  const [formActiv,setFormActiv]= useState(false);
  function handleClick(Btn){
    setFormActiv(!formActiv);
    setInfo(Btn);
  }

  return (


<>
      { formActiv ? <EnterInfo handleClick={handleClick} info={info} /> : <LoginPage handleClick={handleClick} listBtn={listBtn} />  }

</>
   
    
  )
}
