import React, { useState } from "react";
import Header from "./Header";
import {useHistory } from "react-router-dom";
import LoginButton from "./LoginButton";

function Login() {
    let history = useHistory();
    const [message, setMessage] = useState("");
    const [isSuccessFullLogin, setIsSuccessFullLogin] = useState(0);
    const [loginCode, setLoginCode] = useState("");
    const [isVisited, setIsVisited] = useState(localStorage.isVisited);
    
    function handleInputChange(event) {
        const newLoginCode = event.target.value;
        setLoginCode(newLoginCode);
    }

    
    function handleClickEvent (event) {
        if(!isVisited) {
            setIsSuccessFullLogin(2);
            if(loginCode.length === 0)
                setMessage("Empty Field! TRY AGAIN");
            else if(loginCode.length < 9) {
                setMessage("Enter 9-digit code! TRY AGAIN");
            } else {
                localStorage.code = loginCode;
                localStorage.isVisited = true;
                setIsVisited(localStorage.isVisited);
                setMessage("Hurrey!! TRY LOG IN WITH SAME CODE");
                setIsSuccessFullLogin(1);
            }
        }
        else if(isVisited) {
            if(loginCode === localStorage.code) {
                setIsSuccessFullLogin(1);
                setMessage("SucceFully Logged In");
                setLoginCode("");
                // take to home screen
                setTimeout(() => {
                    setIsSuccessFullLogin(0);
                    // history = [];
                    history.replace("/notes");
                }, 1500);
                
            } else {
                setIsSuccessFullLogin(2);
                setMessage("Enter Correct Code! TRY AGAIN");
            }
        } 
        setLoginCode("");
        setTimeout(() => {
            setIsSuccessFullLogin(0);
        }, 2000);

        event.preventDefault();
    }


    const errorMessageObj = {
        color: "red",
        display: "hidden",
        marginBottom: "20px" 
    }

    if(isSuccessFullLogin === 1) {
        errorMessageObj.color = "green";
        errorMessageObj.display = "block";
    } else if(isSuccessFullLogin === 2){
        errorMessageObj.color = "red";
        errorMessageObj.display = "block";
    } else {
        errorMessageObj.display = "none";
    }


    return <div>
        <Header isLoggedIn={false} isEditCode={false} />
        {/* { 
            isSuccessFullLogin!==1 &&
            <Link to="/editCode">
                <EditIconComponent />
            </Link>
        } */}
        <div className="login-form" >
            <p style={errorMessageObj} >{message}</p>
            <input type="number" min="100000000" max="999999999" onChange={handleInputChange} placeholder="Enter 9-digit code" value={loginCode} ></input>
            
            <LoginButton text={!isVisited ? "SET CODE" : "GET IN"} onClick={handleClickEvent}/>
        </div>
    </div> 
    
    
    
    
}

export default Login;