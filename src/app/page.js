'use client'
import {useState} from 'react'
import Login from '../components/login'
import SignUp from './SignUp';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Eventclass from '@/components/EventClass';
import { Properties } from '@/components/Properties';
function Page(){
  const func = (params) => {
      alert("Hello"+ " "+ params)
  }
return(
  // <main><div className="d-flex mx-auto">
  //   <Properties Name="Lawal" color="bg-success text-white" age="20" func={func}></Properties>
  //   <Properties Name="Jafar" color="bg-primary text-white" age="18" func={func}></Properties>
  //   <Properties Name="Okiki" color="bg-danger text-white" age="19"></Properties>
  //   <Properties Name="Jafar" color="bg-warning text-white" age="21"></Properties>
  //   </div>
  // </main>
  // <Login></Login>
  <SignUp></SignUp>
);
}
export default Page
