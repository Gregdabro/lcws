import React from 'react';
import SignUpForm from "../components/SignUpForm/SignUpForm";

const SignupPage = () => {
    return (
        <div style={{display: "flex", minHeight: "100vh", justifyContent: "center", alignItems: "center", padding: 20, background: "whitesmoke"}}>
            <SignUpForm/>
        </div>
    );
};

export default SignupPage;