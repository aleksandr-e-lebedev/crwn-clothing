import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout';

import Header from './components/header/header';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

// eslint-disable-next-line no-shadow
const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.string,
    createdAt: PropTypes.shape({
      seconds: PropTypes.number,
      nanoseconds: PropTypes.number,
    }),
    displayName: PropTypes.string,
    email: PropTypes.string,
  }),
  checkUserSession: PropTypes.func.isRequired,
};

App.defaultProps = {
  currentUser: null,
};

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatch = {
  checkUserSession,
};

export default connect(mapState, mapDispatch)(App);
