import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField"
import firebase from 'firebase'
import AutoComplete from './AutoCompleteText'

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
};




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCdgL01tA46Q48Ms-Dzw02BnPTb2TD_h0Y",
    authDomain: "fikraprescription.firebaseapp.com",
    databaseURL: "https://fikraprescription.firebaseio.com",
    projectId: "fikraprescription",
    storageBucket: "fikraprescription.appspot.com",
    messagingSenderId: "917406263916"
  };
  firebase.initializeApp(config);


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleClickOpen}variant="contained" color="secondary"  >Add New Prescription</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
              Prescription
              </Typography>
              <Button color="inherit" onClick={this.handleClose} variant="contained" color="secondary" >
                Add
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <div style={{padding:"0px 10px"}}>
          <TextField
          id="outlined-with-placeholder"
          label="Patient Name"
          placeholder="Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          style={{width:"100%"}}
      
        />
        </div>
        <div style={{padding:"0px 10px"}}>
          <TextField
          id="outlined-with-placeholder1"
          label="Patient Age"
          placeholder="Age"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          style={{width:"100%"}}
        />
        </div>
        <div style={{padding:"0px 10px"}}>
         <AutoComplete/>
         </div>
            <Divider />
          </List>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
