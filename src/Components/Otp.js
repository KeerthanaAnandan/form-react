import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function OTPFunction() {
 const[OTP , setOTP] = useState()
//  const changeHandler = (e) =>
//  {
//    setOTP(e.target.value)
//  }
    return (
      <div>
       
    
         <OtpInput            
            inputStyle={{  
                width: '3rem',  
                height: '3rem',  
                margin: '20px 1rem',  
                fontSize: '1rem',  
                borderRadius: 4,  
                border: '2px solid rgba(0,0,0,0.3)',                      
            }}  
          onChange={setOTP}
          numInputs={5}
          separator={<span>-</span>}
          value={OTP}
        />         
      </div>
    )
  
}