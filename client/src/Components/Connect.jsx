import React from 'react'
import Footer from './Footer'
import Header from './Header'
// import { Link } from 'react-router-dom'


const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="con_input my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);


export default function Connect() {
  const pagePath = "connect"

   const handleChange =()=>{}
  return (
    <>
    <div className='App'>
    <Header/>
    <main>
    <div className="con_container ">
      <div className="con_align">
      <div className='con_banner'>
      <h1 >
    A crypto wallet & gateway to blockchain apps
    </h1>
    <br />
    <p>MetaMask provides the simplest yet most secure way to connect to blockchain-based applications.</p>
    <br />
    <button className="checkOut con_btn"> Connect Wallet </button>
    
      </div>
      <div className='inp_container'>
      <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} /> <br />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} /><br />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} /><br />

            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

      </div>
      </div>
    </div>
    </main>
    <Footer pagePath={pagePath}/>
    </div>
    </>
  )
}
