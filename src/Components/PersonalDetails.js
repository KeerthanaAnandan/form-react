import React , {useEffect , useState} from 'react';
import { Typography, Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "./PersonalDetails.css";
import { Formik } from 'formik';
import {Link } from 'react-router-dom';
import { LaptopWindowsRounded } from '@material-ui/icons';

function PersonalDetails() {
  const[countryList , setCountryList] = useState([]);
  const [selectedCountry , setSelectedCountry] = useState("");
  const [selectedCountryCode , setSelectedCountryCode] = useState("");
  // const [isClicked , setIsClicked] = useState(false);
  const [stateList , setStateList] = useState([])
  const [flag , setFlag] = useState("")
  const [alphaCode , setAlphaCode] = useState("")
  const [enteredNumber , setEnteredNumber] = useState("")
  const [selectedGender , setSelectedGender] = useState("")
  useEffect(() =>{
    const fetchData = async() => {
      const data = await fetch("https://restcountries.eu/rest/v2/all");
      const items = await data.json();
      console.log(items)
      setCountryList(items)
    }
    fetchData()
  } , []);

  useEffect(() =>{
   
    if(selectedCountry){
      const filtered =   countryList.filter(count =>{ return count.name == selectedCountry});
      // setHasCountryCode(true)
      console.log(filtered);
    
        // console.log(filtered[0].callingCodes.toString());
        // console.log(filtered[0].alpha2Code)
        console.log(filtered[0].flag)
        console.log(filtered[0].alpha2Code)
       setSelectedCountryCode(filtered[0].callingCodes.toString());
       setFlag(filtered[0].flag)
       setAlphaCode(filtered[0].alpha2Code)
      
   
 
       if(alphaCode){
    const  API_KEY = "RkNhMzVFREhJV3RXZjBQbzFvTHJGQ090U1paQUdaamFPOEFtNzJEUw=="
      var headers = new Headers();
headers.append("X-CSCAPI-KEY", API_KEY);

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow',
 
};
const fetchStates = async() => {
  const data = await fetch(`https://api.countrystatecity.in/v1/countries/${alphaCode}/states` , requestOptions);
  const items = await data.json();
  console.log(items)
  setStateList(items)
}
fetchStates()



// fetch(`https://api.countrystatecity.in/v1/countries/${alphaCode}/states`, requestOptions)
//   .then(response => response.json() )
//   .then(result =>   setStateList(result))
//   .catch(error => console.log('error', error));

}
    }
    },[selectedCountry , alphaCode])
 const clickHandler = (e) => {
  setSelectedGender(e.target.innerHTML) 

 }
    return (
        <div>
      <center>
        <Typography variant="h5">Add your Personal Details</Typography>
        <p>
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, laborum?
        </p>
       
      </center>
<div className="personalDetails">
     <Formik
       initialValues={{ name: '',country: '', states : '', number: '' ,}}
       validate={values => {
        setSelectedCountry(values.country)
         const errors = {};
         if (!values.name) {
           errors.name = 'Required';
         } else if (
          !/^[A-Za-z\s]+$/i.test(values.name)
          //  !/^[!@#$&._%+-]$/i.test(values.name)
         ) {
           errors.name = 'Invalid name';
         }
         return errors;
         
       }}
       onSubmit={(values, { setSubmitting }) => {
        //  setTimeout(() => {
        //    alert(JSON.stringify(values, null, 2));
        //    setSubmitting(false);
        //  }, 400);
        setSubmitting(false);
         localStorage.setItem('name' , values.name);
         localStorage.setItem('country' , values.country);
         localStorage.setItem('state' , values.states);
         localStorage.setItem('number' , selectedCountryCode + "-" + values.number);
         localStorage.setItem('gender' , selectedGender);
             window.location.href = "./CompanyDetails"
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
           <div className="inputs">
             <label htmlFor="name">Full Name</label>
           <input
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           {errors.name && touched.name && errors.name}
           </div>
           {/* <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password} */}
          
           {/* my own form */}
  
{/*gender */}
<div className="gender-group">
            <label>Gender</label>
            <br />
            <Button className="gender-btn" onClick={clickHandler} variant="outlined">Male</Button>&nbsp;
            <Button className="gender-btn"  onClick={clickHandler} variant="outlined">Female</Button>&nbsp;
            <Button className="gender-btn"  onClick={clickHandler} variant="outlined">Other</Button>&nbsp;
          </div>
        
    {/* country*/ }
    <div className="inputs">
    <label htmlFor="country">Country</label>
     <select required className="form-control" id="country" name="country" value={values.country}  onChange={handleChange} >
     <option value="first">Please select</option>
      
      
           
            
          
     {countryList.map(single => (
        
      <option key={single.name} value={single.name} label={single.name}>{single.name}</option>
     ))}
       </select>
       </div>
       {/*state */}
       <div className="inputs">
       <label htmlFor="states">State</label>
        <select required className="form-control" id="states" name="states" value={values.states}  onChange={handleChange} >
        <option value="first" label="Select a state ... " defaultValue="selected" >Select a state ... </option>
      
           
            
          
     {stateList.map(single => (
        
      <option key={single.id} value={single.name} label={single.name}>{single.name}</option>
     ))}
       </select> 
       </div>
       <div className="inputWithIcon inputIconBg inputs">
         <label htmlFor="number">Phone Number</label>
         <div className="inputGroup">
         <img src={flag} alt="" />
        <span>+{selectedCountryCode}</span> 
        </div>
  <input  required type="number" className="numinput" placeholder="Phone Number" name="number" value={values.number} onChange={handleChange}  />
  {/* <span>{selectedCountryCode}</span> */}
  {/* <i className="fa fa-phone fa-lg fa-fw" aria-hidden="true"></i> */}
 
  
</div>

       {/* <button type="submit" disabled={isSubmitting}>
             Submit
           </button> */}
           <br />
           <br />
               {/* <Link to="/companydetails"> */}
           <Button className="next-btn" type="submit" disabled={isSubmitting}>
            Next
          </Button>
          {/* </Link> */}
         </form>
       )}
      
       </Formik>
       </div>
       <p>Already have an account?   <span style={{ color: "orange" }}>
          Login In
        </span></p>
       
       {/* <h1>{selectedCountry}</h1> */}
       {/* {hasCountryCode ?  <h1>{selectedCountryCode}</h1> : null } */}
      
       {/* <h1>{selectedCountryCode.countrycode}</h1> */}
       {/* <h1>{selectedCountryCode.map(single => {
         <div>
        <p>{single.name}</p>
        <p>{single.alpha2Code}</p>
         </div>
       })}</h1> */}
       {/* <h1>{selectedCountryCode}</h1> */}
       {/* <h1>{selectedCountryCode}</h1>
       <img src={flag} alt="" /> */}
       
       {/* <h1>{stateList}</h1> */}
          {/* {stateList.map(single => (
        
       <h1>{single.name}</h1>
       ))}   */}
   </div>
 );
 
  
    
       }

export default PersonalDetails
