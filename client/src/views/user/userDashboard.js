import React from 'react';
import './general.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ExposureIcon from '@material-ui/icons/Exposure';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardProfileInformations from './dahsboardProfileInformations';
import Simulator from './Simulator/Simulator';
import ApplyForLoan from './Apply/Apply';
import Item from './Myscheduled/Myscheduled';
import OurTeam from './Other/Signup2';
// import OurTeam from './Other/ourteam';
// import OurTeam from '../user/Other/Signup';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  list: { width: 30 },
}));

function ClippedDrawer(props) {
  const classes = useStyles();
  function hi() {
    console.log(props.apply);
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            My Dashboard
          </Typography>
          <Grid item xs />
          <Grid item>
            <Typography variant="title">Welcome User!</Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem
              button
              key="Profile Informations"
              onClick={props.profileinf}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile Informations" />
            </ListItem>

            <ListItem button key="Simulator" onClick={props.simulator}>
              <ListItemIcon>
                <ExposureIcon />
              </ListItemIcon>
              <ListItemText primary="Simulator" />
            </ListItem>

            <ListItem button key="Apply For A Loan" onClick={props.apply}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText primary="Apply For A Loan" />
            </ListItem>

            <ListItem
              button
              key="My Scheduled Appointements"
              onClick={props.mysched}
            >
              <ListItemIcon>
                <WatchLaterIcon />
              </ListItemIcon>
              <ListItemText primary="My Scheduled Appointements" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
      </main>
    </div>
  );
}

class UserDashboard extends React.Component {
  state = {
    view: 'profileinformations',
  };

  profileView = () => {
    const { view } = this.state;
    this.setState({
      view: 'profileinformations',
    });
  };

  simulatorView = () => {
    const { view } = this.state;
    this.setState({
      view: 'simulator',
    });
  };

  applyView = () => {
    const { view } = this.state;
    this.setState({
      view: 'apply',
    });
  };

  myschedView = () => {
    const { view } = this.state;
    this.setState({
      view: 'mysched',
    });
  };

  render() {
    const { view } = this.state;

    switch (view) {
      case 'profileinformations':
        return (
          <div>
            <ClippedDrawer
              profileinf={this.profileView}
              simulator={this.simulatorView}
              apply={this.applyView}
              mysched={this.myschedView}
            />
            <DashboardProfileInformations />
          </div>
        );
      case 'simulator':
        return (
          <div>
            <ClippedDrawer
              profileinf={this.profileView}
              simulator={this.simulatorView}
              apply={this.applyView}
              mysched={this.myschedView}
            />
            <Simulator />
          </div>
        );
      case 'apply':
        return (
          <div>
            <ClippedDrawer
              profileinf={this.profileView}
              simulator={this.simulatorView}
              apply={this.applyView}
              mysched={this.myschedView}
            />
            <ApplyForLoan />
          </div>
        );
      case 'mysched':
        return (
          <div>
            <ClippedDrawer
              profileinf={this.profileView}
              simulator={this.simulatorView}
              apply={this.applyView}
              mysched={this.myschedView}
            />
            <Item />
          </div>
        );
    }
  }
}
export default UserDashboard;
