import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Home = () => {
  return (
    <div>
      <List>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="I live in São Paulo, Brazil" secondary="As the biggest city in the Americas" />
        </ListItem>
        <ListItem>
          <Avatar>
            <WorkIcon />
          </Avatar>
          <ListItemText primary="I work at Pixter" secondary="Like Head of Mobile Development" />
        </ListItem>
      </List>
    </div>
  );
}

export default Home;
