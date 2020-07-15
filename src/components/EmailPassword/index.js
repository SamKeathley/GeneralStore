import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetPassword, resetAllAuthForms } from './../../redux/User/user.actions'
import './styles.scss';
import AuthWrapper from './../AuthWrapper';
import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError
});

function EmailPassword(props) {
    const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState);
    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState([]);

    useEffect(() => {
        if (resetPasswordSuccess) {
            dispatch(resetAllAuthForms());
            props.history.push('/login');
        }
    }, [resetPasswordSuccess]);

    useEffect(() => {
        if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
            setError(resetPasswordError);
        }
    }, [resetPasswordError]);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(resetPassword({ userEmail }));
    }

    const configAuthWrapper = {
        headline: 'Email Password'
    };

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap">

                {error.length > 0 && (
                    <ul>
                        {error.map((e, index) => {
                            return (
                                <li key={index}>
                                    {e}
                                </li>
                            );
                        })}
                    </ul>
                )}
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={userEmail.email}
                        placeholder="Email"
                        handleChange={e => setUserEmail(e.target.value)}
                    />
                    <Button type="submit">
                        Email Password
                    </Button>
                </form>

            </div>
        </AuthWrapper>
    );
}

export default withRouter(EmailPassword);