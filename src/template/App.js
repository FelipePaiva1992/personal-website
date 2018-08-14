import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import ListSubheader from '@material-ui/core/ListSubheader';



import Button from '@material-ui/core/Button';

import ImageAvatar from '../components/ImageAvatar';
import Home from '../pages/home';
import Resume from '../pages/resume';

const drawerWidth = 250;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    backgroundColor: '#106CC8',
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  drawerPaper1: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
    // backgroundColor: '#106CC8',
    // border: 0,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class App extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className={classes.toolbar}>
            <ImageAvatar/>
          </div>
        </Link>
        <Divider />
        {/* <List
          subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemText primary="I live in São Paulo, Brazil"/>
            </ListItem>
          </Link>
        </List>
        <Divider /> */}
        <List>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemText primary="Home"/>
            </ListItem>
          </Link>
          <Link to="/resume" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemText primary="Resume"/>
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Hi! My name is Felipe.
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper1,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content} style={{overflowX : 'auto'}}>
          <div className={classes.toolbar} />
          <Route exact="exact" path="/" component={Home}/>
          <Route path="/resume" component={Resume}/>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
