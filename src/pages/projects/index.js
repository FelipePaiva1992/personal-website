import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Projects = () => {
  return (
    <div>
      <List>
        <ListItem button>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Porto Faz +" secondary="Porto Seguro's service order opening application" />
        </ListItem>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Laudo Digital" secondary="Application for issuing digital reports" />
        </ListItem>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Porto Faz Agora" secondary="Routing application with machine learning" />
        </ListItem>
      </List>
    </div>
  );
}

export default Projects;
