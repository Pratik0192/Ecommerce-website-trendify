import React, { useEffect, useState } from 'react';
import './LoginSignup.css';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import googleIcon from '../../Components/Assets/google.svg';
import { registerUser, loginUser } from '../../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/userSlice';


const Login = (props) => {
  const [currentTab, setCurrentTab] = useState(props.authTab);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: ""
  });
  const statusCode = useSelector((store) => store.user.statusCode);
  const authMessage = useSelector((store) => store.user.authMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(currentTab);
  }, [currentTab]);

  useEffect(() => {
    if(statusCode === 200){
      if(currentTab === "SignUp"){
        window.location = "/login";
      }
      if(currentTab === "Login"){
        window.location = "/";
      }
    }
  }, [statusCode]);

  const changeTab = (tab) => {
    dispatch(userActions.resetStatusCode());
    if(tab === "Login"){
      setCurrentTab("Login");
    } else {
      setCurrentTab("SignUp");
    }
  }

  const emailValidator = email => {
    if (!email) {
      return "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      return "Please enter a valid email";
    }
    return "";
  };

  const passwordValidator = password => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 8) {
      return "Password must have a minimum 8 characters";
    }
    return "";
  };

  const handleNameChange = (e) => {
    dispatch(userActions.resetAutmMessage());
    setUserDetails({
      ...userDetails,
      name: e.target.value
    });
  }

  const handleEmailChange = (e) => {
    dispatch(userActions.resetAutmMessage());
    setEmailErrorMsg(emailValidator(e.target.value));
    setUserDetails({
      ...userDetails,
      email: e.target.value
    });
  }

  const handlePasswordChange = (e) => {
    dispatch(userActions.resetAutmMessage());
    setPasswordErrorMsg(passwordValidator(e.target.value));
    setUserDetails({
      ...userDetails,
      password: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(currentTab);
    if(currentTab === "SignUp"){
      console.log(userDetails);
      await dispatch(registerUser(userDetails));
    } else if (currentTab === "Login"){
      const { name, ...detailsNew } = userDetails;
      console.log(detailsNew);
      await dispatch(loginUser(detailsNew));
    }
  }


  return (
    <div className="auth_outer">
      <div className="auth_main_container">
        <div className="auth_main_wrapper">
          <div fontSize="25px" fontWeight="700" className="auth_header_text">
            {props.authTab} to Trendify
          </div>
          <div className="tab_switcher_outer">
            <div height="48px" className="tab_switcher_container">
              <Link
                to="/login"
                className={clsx("tab_switcher_inner", props.authTab === "Login" && "tab_active")}
              >
                <div
                  cursor="pointer" 
                  className={clsx("tab_switcher_inner", props.authTab === "Login" && "tab_active")} 
                  onClick={() => changeTab("Login")}
                >
                  <span color="#1e2433" className="login_text">Login</span>
                </div>
              </Link>
              <Link
                to="/signup"
                className={clsx("tab_switcher_inner", props.authTab === "SignUp" && "tab_active")}
              >
                <div 
                  cursor="pointer" 
                  className={clsx("tab_switcher_inner", props.authTab === "SignUp" && "tab_active")} 
                  onClick={() => changeTab("SignUp")}
                >
                  <span color="#818898" className="signup_text">Sign Up</span>
                </div>
              </Link>
            </div>
          </div>
          <div noValidate="" className="auth_form_box">
            <div className="auth_input_container">
              {props.authTab === "SignUp" && (
                <div className="auth_input_inner input_email">
                  <div data-private="true" className="auth_input_field_box">
                    <input 
                      className="input_field" 
                      placeholder="Enter your Name" 
                      type="name"
                      onChange={handleNameChange}
                    />
                  </div>
                </div>
              )}
              <div className="auth_input_inner input_email">
                <div data-private="true" className="auth_input_field_box">
                  <input 
                    className="input_field" 
                    placeholder="Enter your email" 
                    type="email"
                    onChange={handleEmailChange}
                  />
                </div>
                <span>{emailErrorMsg}</span>
              </div>
              <div className="auth_input_inner input_password">
                <div data-private="true" className="auth_input_field_box">
                  <input 
                    className="input_field"
                    placeholder={props.authTab === "Login" ? "Enter your password" : "Create a Password"} 
                    type="password"
                    onChange={handlePasswordChange}
                  />
                  {/* <span className="mdi mdi-eye-off-outline" style={{ fontSize: '20px' }}></span> */}
                </div>
                <span>{passwordErrorMsg}</span>
              </div>
              <div className="forgot_password_box">
                <a href="/reset-password/initiate">
                  {props.authTab === "Login" && <span color="#3f475a" className="forgot_password_text">
                    Forgot Password?
                  </span>}
                </a>
              </div>
              {authMessage && 
                <div className={
                  statusCode === 200 ? "auth-message-success" : "auth-message-error"
                }>
                  {authMessage && authMessage}
                </div>
              }
            </div>
            <button className="login_button" onClick={handleSubmit}>
              <span color="#fff" className="login_button_text">
                {props.authTab === "Login" ? "Login" : "Sign Up"}
              </span>
            </button>
            <div className="auth_or_box">
              <div height="1px" className="or_divider"></div>
              <span color="#818898" className="or_text">OR</span>
              <div height="1px" className="or_divider"></div>
            </div>
            <button className="google_auth_button">
              <div className="auth_button_inner">
                <img src={googleIcon} alt="google icon" />
                <span color="#1e2433" className="google_button_text">Continue with Google</span>
              </div>
            </button>
            <button className="apple_auth_button">
              <div className="auth_button_inner">
                <i className="mdi mdi-apple"></i>
                <span color="#1e2433" className="apple_button_text">Continue with Apple</span></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;