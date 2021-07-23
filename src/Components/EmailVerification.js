import React, {  useState , useEffect } from 'react';
import { Typography } from "@material-ui/core";
import generator from 'generate-password'
import "./EmailVerification.css"
import {Link , useHistory} from "react-router-dom";
import NavThree from './NavThree';
import OtpInput from 'react-otp-input';

 function EmailVerification(){
     
         const [generatedOTP , setGeneratedOTP] = useState("")
          const [ errs , setErrs] = useState("")
          const[OTP , setOTP] = useState()
          let history = useHistory()
         useEffect(() =>{
          var password = generator.generate({
            length: 5,
            numbers: true
          });
          
      
          setGeneratedOTP(password)
          console.log(password);
         }, [])
   
    const verifyHandler = (e) => {
      e.preventDefault();

      if(generatedOTP === OTP){
        // window.location = "/success"
        history.push("/success")
      }
      else{
        setErrs("Check Entered otp again")
        setOTP("")
      }
    }
       return(
         <div>
            <NavThree />
        
           <div className="emailVerification">
            
                  <center>
        <Typography variant="h5">Enter the OTP</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illum?
        </p>
      </center>
                <p>Enter your code : <span style={{fontSize:"25px"}}>{generatedOTP}</span>  </p>
         
         
            <div className="otp-input">
            <OtpInput            
            inputStyle={{  
                width: '2.5rem',  
                height: '3rem',  
                margin: '10px 1rem',  
                fontSize: '1rem',  
                borderRadius: 4,  
                border: '2px solid rgba(0,0,0,0.3)',
                alignItems: 'center',                      
            }}  
          onChange={setOTP}
          numInputs={5}
          separator={<span> &nbsp; </span>}
          value={OTP}
        />    
            </div>
            {errs}
           <div className="buttons">
<Link to="/companydetails">
<button type="submit"  className="back-btn">
                        Back
                      </button>
</Link>
           
                      <button type="submit" className="next-btn" onClick={verifyHandler}>
                      Verify
                      </button>
           </div>
          
         
           </div>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, aut.  <span style={{ color: "orange" }}>
          name@doamin.com
        </span></p>
           </div>
       )
}

export default EmailVerification;