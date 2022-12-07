import React from 'react';
import styles from "./SignUpForm.module.scss"

const SignUpForm = () => {
    return (
        <div className={styles.signUp}>
            <form action="#">
                <h2 className={styles.title}>SignUp Form </h2>
                <div className={styles.inputBox}>
                    <input type="text" placeholder="Введите имя" required/>
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.inputBox}>
                    <input type="text" placeholder="Введите email" required/>
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.inputBox}>
                    <input type="password" placeholder="Введите пароль" required/>
                    <div className={styles.underline}></div>
                </div>
                <button>Sign Up</button>
            </form>
            <p className={styles.link}>
                <span> Already have account? </span>
                <a href='/auth/login'>Log In</a>
            </p>
        </div>
    );
};

export default SignUpForm;