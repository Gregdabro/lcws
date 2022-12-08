import React, {useEffect, useState} from 'react';
import styles from "./SignUpForm.module.scss"
import TextField from "../common/form/textField/textField";
import {validator} from "../../utils/validator";
import {validatorConfig} from "./utils";
// import authService from "../../services/auth.service";
import { useSelector, useDispatch } from "react-redux";
// import {useHistory} from "react-router-dom";
import {clearMessage} from "../../store/messageSlice";
import { signUp } from "../../store/authSlice"


const SignUpForm = () => {
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector((state) => state.message);
    console.log("Error message:", message)
    console.log("loading:", loading)
    console.log("successful:", successful)
    // const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const [data, setData] = useState({
        name: "",
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

    // const signUp = async (data) => {
    //     const response = await registration(data)
    //     console.log("response:", response)
    // }

    // const handleSubmitt = async (e) => {
    //     e.preventDefault();
    //     const isValid = validate();
    //     if (!isValid) return;
    //     const newData = {
    //         ...data
    //     };
    //     await authService.register({ name: newData.name, email: newData.email, password: newData.password });
    //     console.log("newData:", newData);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const newData = {
            ...data
        };
        setLoading(true);
        setSuccessful(false);
        dispatch(signUp({ name: newData.name, email: newData.email, password: newData.password }))
            .unwrap()
            .then(() => {
                setSuccessful(true);
                // history.push("/");
            })
            .catch(() => {
                setSuccessful(false);
            })
            .finally(() => {
                setLoading(false);
            });
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






    // return (
    //     <form onSubmit={handleSubmit}>
    //         <TextField
    //             label="Электронная почта"
    //             name="email"
    //             value={data.email}
    //             onChange={handleChange}
    //             error={errors.email}
    //         />
    //         <TextField
    //             label="Имя"
    //             name="name"
    //             value={data.name}
    //             onChange={handleChange}
    //             error={errors.name}
    //         />
    //         <TextField
    //             label="Пароль"
    //             type="password"
    //             name="password"
    //             value={data.password}
    //             onChange={handleChange}
    //             error={errors.password}
    //         />
    //         <button
    //             className="btn btn-primary w-100 mx-auto"
    //             type="submit"
    //             disabled={!isValid}
    //         >
    //             Submit
    //         </button>
    //     </form>
    // );
};

export default SignUpForm;