import React from 'react';
import './styles.scss';
import Button from './../Forms/Button';
import { signInWithGoogle } from './../../firebase/utils';

function SignIn(props) {

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
