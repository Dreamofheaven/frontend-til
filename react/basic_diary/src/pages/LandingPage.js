import React from "react";
import { Link } from "react-router-dom";
import '../css/LandingPage.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

function LandingPage() {

  return (
    <div className='main-box'> 
      <div className='main-box-logo'>
        <h1>오늘의 일기</h1>
      </div>
      <div className='main-box-button'>
      <Link to={'/create'}><button>일기쓰기</button></Link>
      </div>
      <div className="quote-box">
        <p>"기록자가 천재보다도 더 낫다. 기록자는 기억의 천재이다."</p>
      </div>
    </div>
  )  
}

export default LandingPage

