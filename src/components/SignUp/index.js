import React, { useState } from 'react';
import './styles.scss';
import { auth, handleUserProfile } from './../../firebase/utils';
import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';

function SignUp() {
    const [emailSignUp, setEmailSignUp] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setEmailSignUp(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    return (
        <div className="signup">
            <div className="wrap">
                <h2>
                    Signup
                </h2>
                <div className="formWrap" >
                    <form>
                        <FormInput
                            type="text"
                            name="displayName"
                            value={emailSignUp.displayName}
                            placeholder="Full Name"
                            onChange={handleChange}
                        />
                        <FormInput
                            type="email"
                            name="email"
                            value={emailSignUp.email}
                            placeholder="Email Address"
                            onChange={handleChange}
                        />
                        <FormInput
                            type="password"
                            name="password"
                            value={emailSignUp.password}
                            placeholder="Password"
                            onChange={handleChange}
                        />

                        <FormInput
                            type="password"
                            name="confirmPassword"
                            value={emailSignUp.confirmPassword}
                            placeholder="Confirm Password"
                            onChange={handleChange}
                        />

                        <Button type="submit">
                            Register
                    </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
