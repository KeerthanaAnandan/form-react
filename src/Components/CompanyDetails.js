import React from 'react';
import { Typography, Card, Button } from "@material-ui/core";
import FileUpload from './FileUpload';
import "./CompanyDetails.css"
import { Formik } from 'formik';
import {Link} from "react-router-dom";

function CompanyDetails() {
    return (
      <div>
     <div>
      <center>
        <Typography variant="h5">Add your Company Details</Typography>
        <p>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, enim?
        </p>
      </center>
      </div>
         <div className="companyDetails">
            <FileUpload />
           {/*Formik code */}
           <div className="inputs">
     <Formik
       initialValues={{ CompanyName: '' , email: '', JobTitle: '', YearsOfExperience:'' , }}
      //  validate={values => {
      //    const errors = {};
      //    if (!values.email) {
      //      errors.email = 'Required';
      //    } else if (
      //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //    ) {
      //      errors.email = 'Invalid email address';
      //    }
      //    return errors;
      //  }}
       onSubmit={(values, { setSubmitting }) => {
        //  setTimeout(() => {
        //    alert(JSON.stringify(values, null, 2));
        //    setSubmitting(false);
        //  }, 400);
        localStorage.setItem('companyName' , values.CompanyName);
        localStorage.setItem('email' , values.email);
        localStorage.setItem('Jobtitle' , values.JobTitle);
        localStorage.setItem('yearsOfExp' , values.YearsOfExperience);
         window.location.href = "./emailverification"
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
             <div className="single-input">
             <label htmlFor="CompanyName">Company Name</label>
             <input
             type="text"
             name="CompanyName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.CompanyName}
             required
           />
             </div>
 
<div className="single-input">
<label htmlFor="email">Email Id</label>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             required
           />
           {errors.email && touched.email && errors.email}
</div>
            
           {/* <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password} */}
       <div className="single-input">
       <label htmlFor="JobTitle">Job Title</label>
        <input
             type="text"
             name="JobTitle"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.JobTitle}
             required
           />
       </div>


    <div className="single-input">
          <label htmlFor="YearsOfExperience">Years of Experience</label>
           <input
             type="number"
             name="YearsOfExperience"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.YearsOfExperience}
             required
           />
   </div>

<div className="single-input">
<span><input type="checkbox" name="TermsAndConditions" id="" required />
     <label htmlFor="TermsAndConditions"> I accept to terms and conditions</label></span>
</div>
<div className="buttons">
<Link to="/">
<button type="submit" disabled={isSubmitting} className="back-btn">
             Back
           </button>
</Link>

           <button type="submit" disabled={isSubmitting} className="next-btn">
             Send OTP !
           </button>
</div>
      
         </form>
       )}
     </Formik>
     </div>
        </div>
        </div>
    )
}

export default CompanyDetails
