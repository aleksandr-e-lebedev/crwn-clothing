import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout';

import Header from './components/header/header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

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
  }
}

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
  setCurrentUser: PropTypes.func.isRequired,
};

App.defaultProps = {
  currentUser: null,
};

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatch = {
  setCurrentUser,
};

export default connect(mapState, mapDispatch)(App);
