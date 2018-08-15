import React, {StyleSheet} from 'react';
import moment from 'moment';
import './index.css';
import classnames from 'classnames';

import {withStyles} from '@material-ui/core/styles';
import resume from './resume.json';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';

import Chip from '@material-ui/core/Chip';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCrown, faBookOpen, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

import Grid from '@material-ui/core/Grid';

import CardCollapsable from '../cardCollapsable';

import SkillBars from '../skillBar';

const styles = {
  root: {
    width: '100%'
  }
}

class Resume extends React.Component {
  state = {
    expanded: 'company'
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded
        ? panel
        : false
    });
  };

  render() {
    const {classes} = this.props;
    const {expanded} = this.state;
    return (<div className={styles.root}>
      <Typography variant="headline" gutterBottom="gutterBottom">Who I'am?</Typography>
      <Typography variant="body1" gutterBottom="gutterBottom">
        {resume.basics.summary}
      </Typography>
      <Typography variant="body1" gutterBottom="gutterBottom">
        {resume.basics.summaryDetail}
      </Typography>
      <Typography variant="headline" gutterBottom="gutterBottom" style={{ marginTop: 50 }}>What my stack?</Typography>
      <Grid container="container" spacing={12} style={{ maxWidth: '800px' }}>
      {
        resume.skills.sort((a, b) => b.score - a.score).map(item => {
          return (<Grid item="item" xs={6} md={2}>
            <Chip avatar={<Avatar> {
              item.score >= 9
                ? <FontAwesomeIcon icon={faCrown}/>
                : item.score >= 7 ? <FontAwesomeIcon icon={faUserGraduate}/> : <FontAwesomeIcon icon={faBookOpen}/>
            }</Avatar>} label={item.name} style={{ marginBottom: 10 }}/>
          </Grid>)
        })
      }
    </Grid>
    <Typography variant="headline" gutterBottom="gutterBottom" style={{ marginTop: 50 }}>Where I worked?</Typography>
      <Grid container="container" spacing={12} style={{
          justifyContent: 'space-between'
        }}>
        {
          resume.work.map(item => {
            let dueDate = moment(item.startDate).format('YYYY');
            if (item.endDate) {
              dueDate += " - " + moment(item.endDate).format('YYYY');
            } else {
              dueDate += " +"
            }
            return (<Grid item="item" xs={12} md={6}>
              <CardCollapsable company={item.company} position={item.position} dueDate={dueDate} summary={item.summary}/>
            </Grid>);
          })
        }
      </Grid>
      <Typography variant="headline" gutterBottom="gutterBottom" style={{ marginTop: 50 }}>Where I studied?</Typography>
      <Grid container="container" spacing={12} style={{
          justifyContent: 'space-between'
        }}>
        {
          resume.education.map(item => {
            let dueDate = moment(item.startDate).format('YYYY');
            if (item.endDate) {
              dueDate += " - " + moment(item.endDate).format('YYYY');
            } else {
              dueDate += " +"
            }
            return (<Grid item="item" xs={12} md={6}>
              <CardCollapsable company={item.institution} position={item.courses[0]} dueDate={dueDate}/>
            </Grid>);
          })
        }
      </Grid>
    </div>);
  }
}

export default withStyles(styles)(Resume);
