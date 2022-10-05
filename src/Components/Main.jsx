import React, { useState } from 'react';
import EnterInfoPage from '../Pages/EnterInfoPage';
import LoginPage from '../Pages/LoginPage';
import {RiUserAddFill } from 'react-icons/ri';
import {FaStore} from 'react-icons/fa';
import {CgEnter} from 'react-icons/cg';

export default function Main() {
  const [info,setInfo]=useState({});
  const [listBtn]= useState([{icon:<CgEnter/>, typebtn:'ورود' ,id:'enter', titr:'ورود',btn:'ورود'},{icon:<RiUserAddFill/>, typebtn:'خریدارم' ,id:'costomer', titr:'ثبت نام خریدار', btn:'ثبت نام'},{icon:<FaStore/>, typebtn:'فروشندم',id:'seller', titr:'ثبت نام فروشنده', btn:'ثبت نام'}])
  const [formActiv,setFormActiv]= useState(false);
  function handleClick(Btn){
    setFormActiv(!formActiv);
    setInfo(Btn);
  }

  return (
    <>
      { formActiv ? <EnterInfoPage handleClick={handleClick} info={info} /> : <LoginPage handleClick={handleClick} listBtn={listBtn} />  }
    </>
  )
}
