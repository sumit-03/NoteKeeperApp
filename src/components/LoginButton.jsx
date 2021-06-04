import React from "react";
import {makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    
    loginButton: {
      marginRight: "20px"
    }
  
  }));


function LoginButton(props) {
    const classes = useStyles();
   
    return <Button href={props.href}
            variant="contained"
            color="primary"
            className={classes.loginButton}
            onClick={props.onClick}
            >
            {props.text}
        </Button>
      
}

export default LoginButton;