import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {makeStyles, withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import HighlightIcon from "@material-ui/icons/Highlight";
import EditIconComponent from "./EditIconComponent";
import Button from "@material-ui/core/Button";
import InputBase from '@material-ui/core/InputBase';
import { Link } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Fab from '@material-ui/core/Fab';

import LoginButton from "./LoginButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f5ba13"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize: "25px",
    color: "#fff",
    fontFamily: "McLaren",
    fontWeight: "200"
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "darkgoldenrod",
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
        fontColor: "black",
        fontSize: "15px"
      },
    }
  },


}));

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiAppBar-colorPrimary': {
      backgroundColor: "#f5ba13",
    },
    '.MuiFab-root' : {
      width: "50px",
      height: "50px",
    },
  },
})(() => null);




export default function Header(props) {
  const classes = useStyles();

  // console.log(props);
  function handleSearchInputChange(event) {
    let searchVal = event.target.value;
    searchVal = searchVal.toLowerCase();

    let notesList = document.querySelectorAll("div.noteDiv div > h1");
    
    notesList.forEach((item) => {
      let noteTitle = item.innerHTML;
      noteTitle = noteTitle.toLowerCase();
      if(noteTitle.search(searchVal)) {
        item.parentNode.style.display = "none";
      } else {
        item.parentNode.style.display = "block";
      }
    })

  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <GlobalCss />
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HighlightIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Keeper
          </Typography>

          {/* edit */}
          {props.isEditCode &&
            
            <LoginButton text="LOG IN" href={"/"} />
            
          }
          

          {/* login */}
          {(!props.isLoggedIn && !props.isEditCode) && 
            
            <Link to="/editCode" >
              <EditIconComponent />
            </Link>
            
          }
          
          {props.isLoggedIn &&
            <LoginButton text="LOG OUT" href={"/"} />
            
          }

          {/* notes(after login) */}
          {props.isLoggedIn &&
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearchInputChange}
              />
            </div>
          }

        </Toolbar>
      </AppBar>
    </div>
  );
}
