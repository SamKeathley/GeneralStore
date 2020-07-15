import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';
import AuthWrapper from './../AuthWrapper';
import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';

import { auth } from './../../firebase/utils';

function EmailPassword(props) {
    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const config = {
                url: 'http://localhost:3000/login'
            };
            await auth.sendPasswordResetEmail(userEmail, config)
                .then(() => {
                    props.history.push('/login')
                })
                .catch(() => {
                    const err = ['Email not found.'];
                    setError([]);
                })
        }
        catch (err) {
            console.log((err), { userEmail });
        }
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