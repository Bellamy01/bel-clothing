import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in.styles.scss';
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({ email: '', password: '' })
        }
        catch (e) {
            console.error("Error signing in user ", e);
        }

    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state;
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <FormInput 
                        name='email'
                        type='email' 
                        handleChange={this.handleChange} 
                        value={email}
                        label='Email'
                        required 
                    />
                    
                    <FormInput
                        name='password'
                        type='password' 
                        handleChange= {this.handleChange}
                        value={password} 
                        label='Password'
                        required 
                    />
                    
                   <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                   </div>
                   <div className="sign-up">
                    <span>Don't have an account!
                    <Link className="link-sign" to='/signup'>Sign up</Link>
                    </span>
                   </div>
                </form>
            </div>
        )
    }
}

export default SignIn;