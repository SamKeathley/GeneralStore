import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Button from './../Forms/Button';
import FormInput from './../Forms/FormInput';
import AuthWrapper from './../AuthWrapper';
import { signInWithGoogle, auth } from './../../firebase/utils';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const configAuthWrapper = {
        headline: 'Login'
    };

    return (
        <AuthWrapper {...configAuthWrapper}>
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
                    <div className="links">
                        <Link to="/recovery">
                            Reset Password
                        </Link>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    )
}

export default SignIn;
