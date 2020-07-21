import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = ({ currentUser }) => (
  <header className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </header>
);

Header.propTypes = {
  currentUser: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
  }),
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
