import React, { useState } from 'react';
import './styles.scss';
import Button from './../Forms/Button';
import FormInput from './../Forms/FormInput';
import { signInWithGoogle } from './../../firebase/utils';

function SignIn(props) {
    const [userSignIn, setUserSignIn] = useState({
        email: '',
        password: ''
    });


    function handleChange(e) {
        const { name, value } = e.target;
        e.preventDefault();
        setUserSignIn(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="signin">
            <div className="wrap">
                <h2>
                    LogIn
                </h2>
                <div className="formWrap">
                    <form onSubmit={handleSubmit}>

                        <FormInput
                            type="email"
                            name="email"
                            value={userSignIn.email}
                            placeholder="Email"
                            onChange={handleChange}
                        />

                        <FormInput
                            type="password"
                            name="password"
                            value={userSignIn.password}
                            placeholder="Password"
                            onChange={handleChange}
                        />

                        <Button type="submit">
                            LogIn
                        </Button>

                        <div className="socialSignin">
                            <div className="row">
                                <Button onClick={signInWithGoogle}>
                                    Sign In with Google
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
