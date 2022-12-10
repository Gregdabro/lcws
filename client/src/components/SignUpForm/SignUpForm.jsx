import React, {useEffect, useState} from 'react';
import styles from "./SignUpForm.module.scss"
import TextField from "../common/form/textField/textField";
import {signUpSchema} from "./utils";
import {useDispatch} from "react-redux";
import {signup} from "../../store/authSlice";

const SignUpForm = () => {
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

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
        signUpSchema
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({[err.path]: err.message}))
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
        dispatch(signup({ name: newData.name, email: newData.email, password: newData.password }));

    };


    return (
        <div className={styles.signUpForm}>
            <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit}>
                    <h2>SignUp Form</h2>
                    <TextField
                        label="Name"
                        name="name"
                        value={data?.name}
                        onChange={handleChange}
                        error={errors.name}
                    />
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
                        Sign Up
                    </button>
                    <p className={styles.signInlLink}>
                        <span> Already have account? </span>
                        <a href='/auth/login'>Log In</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;