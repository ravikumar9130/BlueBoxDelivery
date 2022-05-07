import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuContainer from './MenuContainer'
import {
   AccountBalanceWalletRounded,

   Favorite,
   HomeRounded,

   SummarizeRounded,
} from "@mui/icons-material";

export default function Footer({pagePath}) {

   useEffect(() => {
      const menuLi = document.querySelectorAll("#menu li");

      function setMenuActive() {
         menuLi.forEach((n) => n.classList.remove("active"));
         this.classList.add("active");
         
      }
      
      menuLi.forEach((n) => n.addEventListener("click", setMenuActive));


   });
   return (
      <>
         <div className="leftMenu">
            <ul id="menu">

              
                <li id='1' className={pagePath === "home" ? "active":""}> <Link to={'/home'} > 
                <span className='icon'><HomeRounded /></span> 
                
                </Link>
                </li>
              
                <li id='2'  className={pagePath === "connect" ? "active":" "}> <Link to={'/connect'} > 
                <span className='icon'><AccountBalanceWalletRounded /></span> 
                
                </Link>
                </li>
               

               <MenuContainer link={'#'} icon={<Favorite />} />

               <MenuContainer link={'#'} icon={<SummarizeRounded />} />
               <div className="indicator"></div>
            </ul>
         </div>
      </>
   )
}
