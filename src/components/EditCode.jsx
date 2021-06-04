import React, { useState } from "react";
import Header from "./Header";
import LoginButton from "./LoginButton";


function EditCode(props) {

    const [pcode, setPCode] = useState("");
    const [ncode, setNCode] = useState("");
    const [isEdit, setIsEdit] = useState(0);
    const [message, setMessage] = useState("");

    function handleInputChange(event) {
        const {name, value} = event.target;
        if(name === "new") {
            setNCode(value);
        } else {
            setPCode(value);
        }
        
    }


    function handleEditClickEvent() {
        const val = localStorage.code;
        if((val !== undefined) && (val.length === 9) && (val === pcode)) {
            localStorage.code = ncode;
            setMessage("SuccessFully Changed the code");
            setIsEdit(1);
        } else {
            setMessage("IN-VALID ATTEMPT! TRY AGAIN");
            setIsEdit(2);
            
        }
        setInterval(() => {
            setIsEdit(0);
        }, 2500);
    }

    const errorMessageObj = {
        color: "red",
        display: "hidden",
        marginBottom: "20px" 
    }

    if(isEdit === 1) {
        errorMessageObj.color = "green";
        errorMessageObj.display = "block";
    } else if(isEdit === 2){
        errorMessageObj.color = "red";
        errorMessageObj.display = "block";
    } else {
        errorMessageObj.display = "none";
    }

    return <div>
        <Header isLoggedIn={false} isEditCode={true} />
        <div className="edit-form" >
            
            <p style={errorMessageObj} >{message}</p>
            <input name="prev" type="number" min="100000000" max="999999999" onChange={handleInputChange} placeholder="Enter 9-digit previous code" value={pcode} ></input>
            <input name="new" type="number" min="100000000" max="999999999" onChange={handleInputChange} placeholder="Enter 9-digit new code" value={ncode} ></input>
            
            {/* <button type="button" onClick={handleEditClickEvent} >EDIT CODE</button> */}
            <LoginButton text={"EDIT CODE"} href="#" onClick={handleEditClickEvent}/>
        </div>    
    </div>;
        
    
}

export default EditCode;