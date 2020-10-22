import React, {Component} from 'react';
import './Auth.css';



class Auth extends Component {
    state = {email: '', password: '', newEmail: '', newPassword: '', loggedIn: false, name:''};

    signUpHandler = () => {
        const container = document.getElementById('container');
        container.classList.add('right-panel-active');
};

    signInHandler = () => {
        const container = document.getElementById('container');
        container.classList.remove('right-panel-active');
    };




    handleLogin = event => {
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.password);

    };

    createUser = event => {
        event.preventDefault();
        this.props.onCreateUser(this.state.newEmail, this.state.newPassword, this.state.name);
    };

    updateField = event => {
        const data = {};
        data[event.target.name] = event.target.value;
        this.setState(data);
    };


    render() {
        return (
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <input type="text" name='name' placeholder="Name" onChange={this.updateField} value={this.state.name} />
                        <input type="email" name='newEmail' placeholder="Email" onChange={this.updateField} value={this.state.newEmail} />
                        <input type="password" name='newPassword' placeholder="Password" onChange={this.updateField} value={this.state.newPassword} />
                        <button onClick={this.createUser}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <input type="email" name="email" onChange={this.updateField} value={this.state.email} placeholder="Email"/>
                        <input type="password" name="password" onChange={this.updateField} value={this.state.password} placeholder="Password"/>
                        <a href="#">Forgot your password?</a>
                        <button onClick={this.handleLogin}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome!</h1>
                            <p>Sign in to join the group chat</p>
                            <button className="ghost" onClick={this.signInHandler} id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>New?</h1>
                            <p>Create account</p>
                            <button className="ghost" onClick={this.signUpHandler} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Auth;