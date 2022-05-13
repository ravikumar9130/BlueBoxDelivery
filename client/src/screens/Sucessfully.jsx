import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

export default function Sucessfully() {
  return (
    <>
        <div className="App">
          <Header/>
          <div className="scontainer">
        <div className="scard">
          <center>
      <div style={{ borderRadius:200, height:200, width:200,  margin:0,background:'#ffa60038' }}>
        <center> <i className="checkmark">✓</i></center>
       
      </div>
      <center>
        <h1 className='h1'>Success</h1> </center>
        <center>
        <p className='p'>Transaction send Successfully ! <br />
         Your purchase request Placed<br/> </p>
         <br/>
         <Link to={'/home'} ><button className="checkOut" >Back to Home</button> </Link>
        
         </center>
         </center>
      </div>
      
      </div>
        </div>

    </>
  )
}
