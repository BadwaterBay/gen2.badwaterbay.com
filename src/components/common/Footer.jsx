import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  // faDocker,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { far, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { fas, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  // faDocker,
  faGithub,
  far,
  faEnvelope,
  fas,
  faChevronCircleUp
);

class Footer extends Component {
  /** Get current year. */
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    const {
      basics: { name, profiles },
    } = this.props;

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const profileArray = profiles.map((profile) => (
      <li key={profile.network}>
        <a href={profile.url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={[profile.icon.iconPrefix, profile.icon.iconName]} />
        </a>
      </li>
    ));

    return (
      <footer id="component-footer">
        <div>
          <div id="back-to-top">
            <IconButton onClick={scrollToTop}>
              <FontAwesomeIcon icon={['fas', 'chevron-circle-up']} />
            </IconButton>
          </div>
          <div>
            <ul className="profile-icons">{profileArray}</ul>
            <div className="copyright">
              Copyright &copy; {this.getYear()} {name}.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
