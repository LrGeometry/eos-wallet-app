import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components';

const User = ({
  className = 'meta hidden-sm-down',
  greeting,
  link = {
    to: 'www.website.com',
  },
  location,
  name = 'Display Name',
  status,
  styles = {
    displayName: 'display-name',
    location: 'location',
    link: 'url',
    logout: 'logout',
    status: 'status',
    divider: 'divider px-2',
    logoutIcon: 'icon icon-eos_icons_logout',
  },
}) => (
  <div className="account-info">
    <Link to="/preferences">
      <div className="thumbnail">
        <div className="settings icon-eos_icons_settings" />
        <img
          alt=""
          className="user-thumbnail"
          src="images/male_2.jpg"
        />
      </div>
    </Link>
    <div className={className}>

      <p className={styles.displayName}>{greeting}{name}</p>

      {location && <p className={styles.location}>{location}</p>}

      <div>
        <Link
          className={styles.link}
          to="/preferences"
        >Customize your profile
        </Link>
        {greeting &&
          <span>
            <span className={styles.divider}>|</span> 
            <Link to="/logout" className={styles.logout}><span className={styles.logoutIcon} /></Link>
          </span>
        }
      </div>

      <Icon
        className={styles.icon}
        size={location ? Icon.small : Icon.large}
      />

      {status && <p className={styles.status}>{status}</p>}
    </div>
  </div>
);

export default User;
