import React from 'react';
import styles from "./LoginForm.module.scss"
const LoginForm = () => {
    return (
        <div className={styles.loginForm}>
            <form action="#">
                <h2 className={styles.title}>Login Form </h2>
                <div className={styles.inputBox}>
                    <input type="text" placeholder="Введите email" required/>
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.inputBox}>
                    <input type="password" placeholder="Введите пароль" required/>
                    <div className={styles.underline}></div>
                </div>
                <button>Log In</button>
            </form>
        </div>
    );
};

export default LoginForm;