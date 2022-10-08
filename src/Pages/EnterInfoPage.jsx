import React from 'react';
import Button from '../Components/Button';
import EnterInfoHeader from '../Components/EnterInfoHeader';
import Input from '../Components/Input';
import { useFormik } from 'formik';

export default function EnterInfo({handleClick,info}) {

  const formik = useFormik({
    initialValues: {phoneNumber:""},
    onSubmit: values =>{
      alert(JSON.stringify(values))
    },
    validate: (values) => {
      const errors = {};
      
      if (values.phoneNumber[0] != 0){
        errors.phoneNumber="اولین رقم موبایل با عدد صفر شروع می شود";
      }
      if (!values.phoneNumber){
        errors.phoneNumber="شماره موبایل اجباری است";
      }
      if (values.phoneNumber.length > 11){
        errors.phoneNumber="شماره موبایل 11 رقم است";
      }
      return errors;
    }
  })
  return (
    <form  onSubmit={formik.handleSubmit} >
      <div className='container-fluid mydiv ' >
       <div className='row justify-content-center align-items-center ' >
        <div className='col-sm-7 col-lg-5  p-4 my-5' >
          <EnterInfoHeader info={info} handleClick={handleClick} />
          <Input info={info} formik={formik} />
          <Button info={info}/>
        </div>
       </div>
      </div>
    </form>
  )
}
