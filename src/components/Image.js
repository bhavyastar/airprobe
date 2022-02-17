import React from 'react'
import Wave from "../Images/wave.png"
import Login from "../Images/login.svg"
import Logini from "./LoginReg"
import '../style/image.css'
const Image = () => {
  return (
      <>
    	<img className="wave"  alt ="" src={Wave} />
	<div className="container">
		<div className="img">
			<img  alt="" src={Login} />
		</div>
		<div className="login-content">
        <Logini />
         </div>
        
    </div>
      
    </>
  )
}

export default Image