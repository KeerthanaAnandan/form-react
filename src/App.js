import './App.css';

import { BrowserRouter as  Router , Switch , Route} from "react-router-dom";
import Nav from "./Components/Nav";
import PersonalDetails from "./Components/PersonalDetails";
import CompanyDetails from "./Components/CompanyDetails";
import EmailVerification from "./Components/EmailVerification";
import Email from "./Components/Email";
import SuccessPage from "./Components/SuccessPage";

function App() {
  return (
    <div className="App">
    <Router>
    <Nav />
      <Switch>
        <Route path="/" exact>
        
        <PersonalDetails />
        {/* <Email /> */}
        </Route>
        <Route path="/companydetails"  >
       
       <CompanyDetails />
        </Route>
        <Route path="/emailverification"  >
       
      <EmailVerification />
        </Route>

        <Route path="/success" exact>
          <SuccessPage />
        </Route>
      </Switch>
     
      </Router>
      
    </div>
   
  );
}

export default App;
