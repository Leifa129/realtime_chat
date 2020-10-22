import React, {Component} from 'react';
import './App.css';
import Auth from './Auth';
import firebase from 'firebase';
import MessageBox from "./MessageBox";


let config = {
    apiKey: 'AIzaSyDdhmbh6aRS2DY8vVUX25HJ0CwvsJuJhI8',
    authDomain: 'spa-auth-f0409.firebaseapp.com',
    database: 'https://spa-auth-f0409.firebaseio.com/',
    projectId: 'spa-auth-f0409'
};

firebase.initializeApp(config);



class App extends Component
{
    state = {loggedIn: false, user: null, messages: []};
    authentication = firebase.auth();
    db = firebase.firestore();

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
                        user: user,
                        loggedIn: true
                    };
                });
            if(user == null) {
                console.log('Not signed in');
                this.setState({loggedIn: false});
            }
        }

    )

    this.db.collection('messages').orderBy('date', 'desc')
        .onSnapshot(snapshot => {
            this.setState({messages: snapshot.docs});
        })
};


    render()
    {
        return (
            <div className="App">

                {
                    // wacky logic.. TODO: clean this up.
                    !this.authFlag ? (
                    (!this.state.loggedIn) ?
                    <Auth onAuth={(username, password) => {
                    this.authentication.signInWithEmailAndPassword(username, password).then(
                        response => {
                            //this.setState({user: response.user});
                            console.log(response.user.displayName);
                        }
                    );

                }} onCreateUser={(username, password, name) => {
                    this.authentication.createUserWithEmailAndPassword(username, password).then(
                        response => {
                            return response.user.updateProfile({displayName: name})
                        }
                    )
                }}></Auth>
                    :
                    <div>

                        <div>Welcome {this.state.user.displayName}</div>
                            <button onClick={() => {this.authentication.signOut().then()}}>Logout</button>

                        <div>
                            <MessageBox
                                messages={this.state.messages} user={this.state.user.email} db={this.db}
                                postMessage={(content) => {this.db.collection('messages').add({author: this.state.user.displayName, content: content, user:this.state.user.email, date: new Date()}).then(
                                    response => {console.log(response)}
                                )}} />

                        </div>
                    </div> ) : <div>

                    </div>
                }
            </div>
        );
    }
}
export default App;
