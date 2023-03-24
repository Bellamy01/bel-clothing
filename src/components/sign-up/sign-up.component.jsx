import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithEmail } from "../../firebase/firebase.utils";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./sign-up.styles.scss";

class SignUp extends React.Component {
    constructor () {
        super();

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : '' 
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password != confirmPassword) {
            toast.error(`Passwords don't match!`, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        try {
            
            toast.promise(
                signInWithEmail(auth, email, password, displayName),
                {
                    pending: 'Creating user',
                    success: 'User created',
                    error: 'User not created'
                }, 
                {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                }
            )
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '' 
            })
        }
        catch (e) {
            console.error("Error creating user ", e);
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render () {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit} autoComplete="off">
                    <FormInput
                        name='displayName'
                        type='text'
                        handleChange={this.handleChange}
                        value={displayName}
                        label='Display Name'
                        required
                    />

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
                        handleChange={this.handleChange}
                        value={password}
                        label='Password'
                        required
                    />

                    <FormInput
                        name='confirmPassword'
                        type='password'
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type="submit">Sign up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;