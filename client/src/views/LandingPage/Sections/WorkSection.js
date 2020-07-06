import React, { useState } from 'react';
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Close from '@material-ui/icons/Close';
import styles from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.js';

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = 'Transition';
export default function WorkSection() {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contacts, setContacts] = useState([]);
  const [sent, setSent] = useState(false);

  // Handle the inputs
  const handleChangeName = (e) => {
    setName(e.target.value);
    console.log('name: ', name);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log('email: ', email);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
    console.log('message: ', message);
  };

  // Handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    const contact = {
      name: name,
      email: email,
      message: message,
    };
    console.log('contact: ', contact);
    axios
      .post('/api/forma', contact)
      .then((res) => {
        setSent(true);
      })
      .then(() => setClassicModal(true))
      .catch(() => {
        console.log('message not send');
      });
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Looking for more than just a job? Want to make a difference where
            you live and work? Explore what's possible with a career at OSA
            Bank. At OSA Bank, you'll get the incentives, tools, resources and
            personal support you need to pursue your professional dreams and
            cultivate meaningful relationships with the people and communities
            you support.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: handleChangeName,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: handleChangeEmail,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  onChange: handleChangeMessage,
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" onClick={handleSubmit}>
                  Send Message
                </Button>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal,
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
                    <h4 className={classes.modalTitle}>
                      <strong>OSA Bank</strong>
                    </h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p>
                      Dear <strong>{name}</strong>, Thank You for Your Request.
                      The examination of your demand may take some time. We will
                      get in touch with you as soon as we finish examinating
                      your request.
                      <br />
                      Thank you.
                      <br />
                      <br />
                      OSA Bank Team.
                    </p>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
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
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
