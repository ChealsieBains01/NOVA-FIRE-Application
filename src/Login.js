import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Login extends React.Component {
  signInWithEmailAndPassword = () => {
    firebaseAppAuth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        this.setState({
          message: 'Welcome!',
          displayName: user.user.displayName,
        });
      })
      .catch((error) =>
        this.setState({
          message: 'Error signing in with password and email!',
        })
      );
  };

  onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'email') {
      this.setState({ email: value });
    } else if (name === 'password') {
      this.setState({ password: value });
    }
  };

  state = {
    message: null,
    email: '',
    password: '',
    displayName: '',
  };

  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <div className="main">
        <header className="App-header">
          {this.state.message !== null && <div>{this.state.message}</div>}
          {user ? (
            <p>Hello, {user.displayName || this.state.displayName}</p>
          ) : (
            <p>Sign in</p>
          )}
          {user ? (
            <button onClick={signOut}>Sign out</button>
          ) : (
            <div>
              <input
                id="email"
                value={this.state.email}
                type="text"
                name="email"
                placeholder="Email"
                onChange={(event) => this.onChangeHandler(event)}
              />
              <input
                id="password"
                value={this.state.password}
                type="password"
                name="password"
                placeholder="Password"
                onChange={(event) => this.onChangeHandler(event)}
              />
              <button onClick={this.signInWithEmailAndPassword}>Log in</button>
              <p>or</p>
              <button
                onClick={() => {
                  signInWithGoogle();

                  this.setState({ message: null });
                }}
              >
                Sign in with Google
              </button>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);
