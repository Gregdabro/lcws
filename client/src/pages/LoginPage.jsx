import React from 'react';
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <div style={{display: "flex", minHeight: "100vh", justifyContent: "center", alignItems: "center", padding: 20, background: "whitesmoke"}}>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;