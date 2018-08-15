import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: '90%',
    margin: 10,
    marginLeft: 0,
    marginRight: 0
  },
  avatar: {
    backgroundColor: blue[500],
  },
});

class CardCollapsable extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, company, position, dueDate, summary } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {company.substr(0,1)}
              </Avatar>
            }
            title={company}
            subheader={position}
          />
          {summary &&<CardContent>
            <Typography variant="Title">
              at {dueDate}
            </Typography>
            <Typography component="p" style={{ marginTop: 5 }}>
              {summary}
            </Typography>
          </CardContent>}
        </Card>
      </div>
    );
  }
}

CardCollapsable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardCollapsable);
