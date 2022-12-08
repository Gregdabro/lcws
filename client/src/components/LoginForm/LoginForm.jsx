import React, {useEffect, useState} from 'react';
import styles from "./LoginForm.module.scss"
import TextField from "../common/form/textField/textField";
import {validator} from "../../utils/validator";
import {validatorConfig} from "./utils";


const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const newData = {
            ...data
        };
        console.log("newData:", newData);
    };


    return (
        <div className={styles.loginForm}>
            <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit}>
                    <h2>Login Form</h2>
                    <TextField
                        label="Email"
                        name="email"
                        value={data?.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        value={data?.password}
                        onChange={handleChange}
                        error={errors.password}
                    />
                    <button
                        type="submit"
                        disabled={!isValid}
                    >
                        Log In
                    </button>
                    <p className={styles.signInlLink}>
                        <span> Already have account? </span>
                        <a href='/auth/signup'>Sign In</a>
                    </p>
                </form>

            </div>
        </div>
    );
};

export default LoginForm;