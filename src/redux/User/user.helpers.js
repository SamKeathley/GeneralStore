import { auth } from './../../firebase/utils';

export const handleResetPasswordAPI = (userEmail) => {
    const config = {
        url: 'http://localhost:3000/login'
    };

    return new Promise((resolve, reject) => {
        auth.sendPasswordResetEmail(userEmail, config)
            .then(() => {
                resolve();
            })
            .catch(() => {
                const err = ['Email not found'];
                reject(err);
            });
    });
}