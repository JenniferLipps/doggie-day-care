import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div>
        <h2>Auth</h2>
        <button className="btn btn-warning" onClick={this.loginClickEvent}>Login With Google</button>
      </div>
    );
  }
}

export default Auth;
