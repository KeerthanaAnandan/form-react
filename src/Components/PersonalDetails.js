import React , {useEffect , useState} from 'react';
import { Typography, Button } from "@material-ui/core";
import { Formik } from 'formik';
// import {Link } from 'react-router-dom';
import "./PersonalDetails.css";
import  { useHistory } from 'react-router-dom'
// import  { Redirect } from 'react-router-dom';
import Nav from "./NavOne";


function PersonalDetails() {
  const[countryList , setCountryList] = useState([]);
  const [selectedCountry , setSelectedCountry] = useState("");
  const [selectedCountryCode , setSelectedCountryCode] = useState("");
  const [stateList , setStateList] = useState([])
  const [flag , setFlag] = useState("")
  const [alphaCode , setAlphaCode] = useState("")
  let history = useHistory();

  
  const [selectedGender , setSelectedGender] = useState("")
  useEffect(() =>{
    const fetchData = async() => {
      const data = await fetch("https://restcountries.eu/rest/v2/all");
      const items = await data.json();
      console.log(items)
      setCountryList(items)
    }
    fetchData()
   
  } , []); // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() =>{
   
    if(selectedCountry){
      const filtered =   countryList.filter(count =>{ return count.name === selectedCountry});
     
      // console.log(filtered);
     //   console.log(filtered[0].flag)
      //   console.log(filtered[0].alpha2Code)
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




}
    }
    },[selectedCountry , alphaCode])
 const clickHandler = (e) => {
  setSelectedGender(e.target.innerHTML) 

 }
    return (
        <div>
           <Nav />
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
          
         ) {
           errors.name = 'Invalid name';
         }
         return errors;
         
       }}
       onSubmit={(values, { setSubmitting }) => {
      
        setSubmitting(false);
         localStorage.setItem('name' , values.name);
         localStorage.setItem('country' , values.country);
         localStorage.setItem('state' , values.states);
         localStorage.setItem('number' , selectedCountryCode + "-" + values.number);
         localStorage.setItem('gender' , selectedGender);
        // <Redirect to='/login'  />
        history.push('/companydetails')
        // window.location = "/companydetails"
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
       
  
{/*gender */}
<div className="gender-group">
            <label>Gender</label>
            <br />
            <br />
           
           
            <div className="form-subs" >
				<label >
					<input type="radio" id="male" name="subscription" value="male" required="required" />
					<span onClick={clickHandler}>Male</span>
				</label>				
				<label>
					<input type="radio" id="female" name="subscription" value="female" />
					<span onClick={clickHandler}>Female</span>
				</label>			 
				<label>
					<input type="radio" id="other" name="subscription" value="silver" />
					<span onClick={clickHandler}>Other</span>
				</label>						
			</div>	
          </div>
        
    {/* country*/ }
    <div className="inputs">
    <label htmlFor="country">Country</label>
     <select required className="form-control" id="country" name="country" value={values.country}  onChange={handleChange} >
     <option value="">Please select</option>
      
   {countryList.map(single => (
        
      <option key={single.name} value={single.name} label={single.name}>{single.name}</option>
     ))}
       </select>
       </div>
       {/*state */}
       <div className="inputs">
       <label htmlFor="states">State</label>
        <select required className="form-control" id="states" name="states" value={values.states}  onChange={handleChange} >
        <option value="" label="Select a state ... " defaultValue="selected" >Select a state ... </option>
      
           
            
          
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

 
  
</div>

      
           <br />
           <br />
            
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
       
     
   </div>
 );
 
  
    
       }

export default PersonalDetails
