import React, {Component} from 'react';
import './App.css';
import Auth from './Auth';
import firebase from 'firebase';
import Quotes from './Quotes';


let config = {
    apiKey: 'AIzaSyDdhmbh6aRS2DY8vVUX25HJ0CwvsJuJhI8',
    authDomain: 'spa-auth-f0409.firebaseapp.com',
    database: 'https://spa-auth-f0409.firebaseio.com/',
    projectId: 'spa-auth-f0409'
};

firebase.initializeApp(config);



class App extends Component
{
    state = {loggedIn: false};
    authentication = firebase.auth();
    // db = firebase.firestore();
    authFlag = true;

componentDidMount() {
    this.authentication.onAuthStateChanged(
        (user) => {
            if(this.authFlag){
                // Code here is only called once...
                console.log('First time init call');
                this.authFlag = false;
            }
            if (user != null)
                this.setState(prevState => {
                    return {
                        ...prevState,
                        loggedIn: !prevState.loggedIn
                    };
                });
            if(user == null) {
                console.log('user signed out');
                this.setState({loggedIn: false});
            }
        }

    )
};


    render()
    {
        return (
            <div className="App">

                {
                    // wacky logic.. could for sure have done something cleaner.
                    !this.authFlag ? (
                    (!this.state.loggedIn) ?
                    <Auth onAuth={(username, password) => {
                    this.authentication.signInWithEmailAndPassword(username, password).then(
                        response => {
                            //this.setState({user: response.user});
                            //console.log(response);
                        }
                    );

                }} onCreateUser={(username, password) => {
                    this.authentication.createUserWithEmailAndPassword(username, password).then(
                        response => {
                            // this.setState({user: response.user});
                            //console.log(response);
                        }
                    )
                }}></Auth>
                    :
                    <div>
                        { <button onClick={() => {this.authentication.signOut().then()}}>Logout</button>
                        }
                        <Quotes />
                    </div> ) : <div></div>
                }
            </div>
        );
    }
}
export default App;
