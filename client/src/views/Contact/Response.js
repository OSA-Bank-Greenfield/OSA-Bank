import React from 'react';
// import './contact.css';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";


import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
  });
  
  Transition.displayName = "Transition";


class Response extends React.Component {
 
	changeLocation() {
	return	window.location='/'
	}
	
	render() {
		const classes = useStyles();
  const [anchorElLeft, setAnchorElLeft] = React.useState(null);
  const [anchorElTop, setAnchorElTop] = React.useState(null);
  const [anchorElBottom, setAnchorElBottom] = React.useState(null);
  const [anchorElRight, setAnchorElRight] = React.useState(null);
  const [classicModal, setClassicModal] = React.useState(false);
		return (
			<GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={4}>
                <Button
                  color="primary"
                  block
                  onClick={() => setClassicModal(true)}
                >
                  <LibraryBooks className={classes.icon} />
                  Classic
                </Button>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Modal title</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p>Dear <strong>{this.props.name.toUpperCase()}</strong>, Thank You For Interest. Your Request About <strong>{this.props.subject.toUpperCase()}</strong> is Taken Into Consideration.
					We need some time to review your request. We will send You an Email on <strong>{this.props.email}</strong></p>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button color="transparent" simple>
                      Nice Button
                    </Button>
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </GridItem>
			  </GridContainer>























			// <Modal.Dialog>
 			// 	 <Modal.Header closeButton onClick={this.changeLocation.bind(this)}>
   			// 		 <Modal.Title>OSA Bank</Modal.Title>
 			// 	 </Modal.Header>

 			// 	 <Modal.Body>
			// 		<p>Dear <strong>{this.props.name.toUpperCase()}</strong>, Thank You For Interest. Your Request About <strong>{this.props.subject.toUpperCase()}</strong> is Taken Into Consideration.
			// 		We need some time to review your request. We will send You an Email on <strong>{this.props.email}</strong></p>
 			//      </Modal.Body>

 			// 	 <Modal.Footer>
  			// 	  <Button variant="primary" onClick={this.changeLocation.bind(this)}>Close</Button>
 			// 	 </Modal.Footer>
			// </Modal.Dialog>
		)
		
	}
}

export default Response;