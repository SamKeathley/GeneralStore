import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUpUser } from './../../redux/User/user.actions';
import './styles.scss';

import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';
import AuthWrapper from './../AuthWrapper';

const mapState = ({ user }) => ({
    signUpSuccess: user.signUpSuccess,
    signUpError: user.signUpError
})

function SignUp(props) {
    const { signUpSuccess, signUpError } = useSelector(mapState);
    const dispatch = useDispatch();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (signUpSuccess) {
            reset();
            props.history.push('/')
        }

    }, [signUpSuccess]);

    useEffect(() => {
        if (Array.isArray(signUpError) && signUpError.length > 0) {
            setErrors(signUpError)
        }
    }, [signUpError]);

    function reset() {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(signUpUser({
            displayName,
            email,
            password,
            confirmPassword
        }));
    }

    const configAuthWrapper = {
        headline: 'Register'
    };

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap" >

                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            );
                        })}
                    </ul>
                )}
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Full Name"
                        handleChange={e => setDisplayName(e.target.value)}
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email Address"
                        handleChange={e => setEmail(e.target.value)}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                    />

                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        handleChange={e => setConfirmPassword(e.target.value)}
                    />

                    <Button type="submit">
                        Register
                    </Button>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default withRouter(SignUp);
