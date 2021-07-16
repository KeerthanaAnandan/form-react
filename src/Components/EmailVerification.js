import React, {  useState , useEffect } from 'react';
import { Typography, Card, Button } from "@material-ui/core";
// import OtpInput from 'react-otp-input';
// import OtpInput from "react-otp-input";
import generator from 'generate-password'
import "./EmailVerification.css"
import { fontSize } from '@material-ui/system';
import {Link} from "react-router-dom";
// import OTPInput, { ResendOTP } from "otp-input-react";

// import OTPInput, { ResendOTP } from "otp-input-react";

// export default class EmailVerification extends Component {
//   state = { otp: '' };

//   handleChange = (otp) => this.setState({ otp });

//   render() {
//     return (
//       <OtpInput
//         value={this.state.otp}
//         onChange={this.handleChange}
//         numInputs={6}
//         separator={<span>-</span>}
//       />
//     );
//   }
// }
 function EmailVerification(){
         const[enteredOTP , setEnteredOTP] = useState('')
         const [generatedOTP , setGeneratedOTP] = useState("")
          const [ errs , setErrs] = useState("")
         useEffect(() =>{
          var password = generator.generate({
            length: 5,
            numbers: true
          });
          
          // 'uEyMTw32v9'
          setGeneratedOTP(password)
          console.log(password);
         }, [])
    //    const  handleChange = ( e) => {
         
    //     setOtp(e.target.value)
    // };
    const verifyHandler = (e) => {
      e.preventDefault();
      if(generatedOTP == enteredOTP){
        window.location.href = "/success"
      }
      else{
        setErrs("Check Entered otp again")
      }
    }
       return(
           <div className="emailVerification">
                  <center>
        <Typography variant="h5">Enter the OTP</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illum?
        </p>
      </center>
                <p>Enter your code : <span style={{fontSize:"25px"}}>{generatedOTP}</span>  </p>
         
           {/* <div>
              <OtpInput
                style={{ width: "3em", height: "3em" }}
                onChange={(otp) => console.log(otp)}
                numInputs={5}
                separator={<span>&nbsp;&nbsp;</span>}
              />{" "}
            </div> */}
            <div className="single-input">
              <label htmlFor="otp">Enter OTP</label>
            <input type="text"  className="otp-input" name="otp" value={enteredOTP} onChange={(e) => setEnteredOTP(e.target.value)}/>
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
       )
}

export default EmailVerification;