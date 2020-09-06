import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faGithub,
  // faDocker,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  fab,
  faGithub
  // faDocker,
);

class Navbar extends Component {
  render() {
    const {
      basics: { name, profiles },
    } = this.props;

    const githubProfile = profiles.filter((profile) => profile.network === 'GitHub')[0];

    return (
      <AppBar id="navbar" position="sticky">
        <Toolbar>
          <Link to="/">
            <Button>
              <Typography variant="h6" className="classes.title">
                {name}
              </Typography>
            </Button>
          </Link>
          <Link to="/about">
            <Button>About</Button>
          </Link>
          <Link to="/labelcopier">
            <Button>Labelcopier</Button>
          </Link>
          <Button href={githubProfile.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={[githubProfile.icon.iconPrefix, githubProfile.icon.iconName]}
            />
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
