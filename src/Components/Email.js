
import { Typography, Card, Button } from "@material-ui/core";
import OtpInput from "react-otp-input";
import { makeStyles } from "@material-ui/styles";
import emailjs from 'emailjs-com';
const useStyles = makeStyles({
  root: {
    width: "50%",
    textAlign: "left"
  },
  textBoxDesign: {
    width: "89%"
  },
  btnHeader: {
    backgroundColor: "orange",
    width: "80%",
    transform: "translate(16px, 9px)"
  },
  otpbox: {
    width: "10px",
    height: "10px"
  }
});

export default function EmailVerification() {
  const classes = useStyles();
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_jbavvva', e.target, 'user_wQXRl6GXLGnRFWGQzHNBR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div>
      <center>
        <Typography variant="h5">Enter the OTP</Typography>
        <p>
          For your security,we need to verify your identity.We sent 5-digit code
          to name@domain.com.Please enter it below
        </p>
      </center>
      <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      <center>
        <Card className={classes.root}>
          <div style={{ transform: "translate(16px, 9px)" }}>
            <label>Enter your Code</label>
            <br />
            <div>
              <OtpInput
                style={{ width: "3em", height: "3em" }}
                onChange={(otp) => console.log(otp)}
                numInputs={5}
                separator={<span>&nbsp;&nbsp;</span>}
              />{" "}
            </div>
            <br />
            <Button
              style={{
                transform: "translate(10px, 10px)",
                width: "3px",
                backgroundColor: "#D3D3D3"
              }}
            >
              Back
            </Button>
            <Button className={classes.btnHeader}>Next</Button>
            <br />
            <br />
            <br />
            <hr />
            <p style={{ textAlign: "center" }}>
              Didnt receive the mail? Check your spam filters for an email from
            </p>
            <p
              style={{ color: "orange", transform: "translate(255px, -16px)" }}
            >
              name@domain.com
            </p>
          </div>
        </Card>
      </center>
    </div>
  );
}
