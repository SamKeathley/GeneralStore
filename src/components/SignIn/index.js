import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { emailSignInStart, signInWithGoogle, resetAllAuthForms } from './../../redux/User/user.actions';
import './styles.scss';
import Button from './../Forms/Button';
import FormInput from './../Forms/FormInput';
import AuthWrapper from './../AuthWrapper';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

function SignIn(props) {
    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentUser) {
            resetForm();
            dispatch(resetAllAuthForms());
            props.history.push('/');
        }
    }, [currentUser]);

    function resetForm() {
        setEmail('');
        setPassword('');
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));
    };

    function handleGoogleSignIn() {
        dispatch(signInWithGoogle());
    };

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
                        value={email}
                        placeholder="Email"
                        handleChange={e => setEmail(e.target.value)}
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                    />

                    <Button type="submit">
                        LogIn
                        </Button>

                    <div className="socialSignin">
                        <div className="row">
                            <Button onClick={handleGoogleSignIn}>
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

export default withRouter(SignIn);
