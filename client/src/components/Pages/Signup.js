import React from "react";
import axios from "axios";

// import Navbar from "../Navbar/Navbar";
//import Footer from "../Footer/Footer";
import "../Signup/Signup.css";
import LogoImg from "../../Image/logoImg.png";

//import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
//import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  state = {
    fullName: "",
    email: "",
    password: "",
    language: "en"
  };

  signupInfo = event => {
    // console.log(event.target.value);
    console.log(event.target);
    console.log(event.target.id);
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  signUp = () => {
    console.log(this.state); //This .state Email, password and language
    let data = this.state;
    axios.post("/data", data).then(response => {
      console.log(response.data);
      console.log(response.error);

      if (response.data.errors) {
        console.log("Login Incorrect");
        alert("Incorrect email format please type again");
        //window.location.href = "/signup";
      } else {
        console.log("Response is true, so redirecting to profile-page....");
        // window.location.href = "/signin";

        this.props.history.push("/Signin");
      }
    });
  };

  selectLanguage = event => {
    console.log("select Language");
    console.log(event.target);
    this.setState({
      language: event.target.value
    });
  };

  // <div className="col s12 m7" id="containerBig">
  //         <div className="nav-wrapper container">
  //           <div>
  //             <a href={"/"}>
  //               <img
  //                 className="circle"
  //                 id="imgLogoBig"
  //                 alt="logoImg"
  //                 src={LogoImg}
  //               />
  //             </a>
  //           </div>

  //           <div className="containerBigMessage"></div>
  render() {
    return (
      <div className="row">
        <div className="col s12 m5" id="containerSmall">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
              <img
                className="circle"
                id="imgLogoSmall"
                alt="logoImg"
                src={LogoImg}
              />
            </a>
          </div>
          <div className="containerSmallMessage">
            <h4>Create An Account</h4>
          </div>
        </div>

        <div className="col s12 m7" id="containerBig">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
              <img
                className="circle"
                id="imgLogoBig"
                alt="logoImg"
                src={LogoImg}
              />
            </a>
          </div>
          <div className="containerBigMessage">
            <h4>Create An Account</h4>
          </div>
          <div className="row" id="formContainer">
            <div className="col s9">
              <p>PERSONAL INFORMATION</p>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                onChange={event => this.signupInfo(event)}
              />
              <br />
              <p>ACCOUNT SECURITY</p>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={event => this.signupInfo(event)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={event => this.signupInfo(event)}
              />
              <br />
              <p>LANGUAGE PREFERENCE</p>
              {/* <label htmlFor="password">Language</label> */}
              <FormControl className="col s12">
                {/* <InputLabel>Language</InputLabel> */}
                <Select
                  id="language"
                  value={this.state.language}
                  onChange={event => this.selectLanguage(event)}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                  <MenuItem value="it">Italian</MenuItem>
                  <MenuItem value="ru">Russian</MenuItem>
                </Select>
              </FormControl>

              {/* <div className="col s12">
                <select
                  id="language"
                  value={this.state.language}
                  onChange={event => this.signupInfo(event)}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="it">Italian</option>
                  <option value="ru">Russian</option>
                </select>
              </div> */}
              <button
                id="button-SignUp"
                className="btn waves-effect waves-light"
                // type="submit"
                name="action"
                onClick={event => this.signUp(event)}
              >
                Sign Up
              </button>
              <a href={"/signin"} className="right" id="membercheck">
                Already A Member!
              </a>
            </div>
          </div>
          <div>{/* <Footer /> */}</div>
        </div>
      </div>
    );
  }
}
// Signup.contextTypes = {
//   router: React.PropTypes.func.isRequired
// };
export default Signup;
