import React, {useState} from 'react';
import { toast } from "react-toastify"
import {registration} from "../../services/userAPI";
// import {Button, Card, Container, Form, Row} from "react-bootstrap";
import styles from "./SignUpForm.module.scss"


const SignUpForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            const data = await registration(email, password);
            console.log(data)
        } catch (e) {
            toast.error(e.message);
        }

    }


    // const signUp = async () => {
    //     try {
    //         const response = await registration(email, password, userName)
    //         console.log(response)
    //     } catch (e) {
    //         console.log(e.message)
    //     }
    // }

    // return (
    //     <Container
    //         className="d-flex justify-content-center align-items-center"
    //         style={{height: window.innerHeight - 54}}
    //     >
    //         <Card style={{width: 600}} className="p-5">
    //             <Form className="d-flex flex-column">
    //                 <Form.Control
    //                     className="mt-3"
    //                     placeholder="Введите ваш email..."
    //                     value={email}
    //                     onChange={e => setEmail(e.target.value)}
    //                 />
    //                 <Form.Control
    //                     className="mt-3"
    //                     placeholder="Введите ваш пароль..."
    //                     value={password}
    //                     onChange={e => setPassword(e.target.value)}
    //                     type="password"
    //                 />
    //                 <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
    //                     <Button
    //                         variant={"outline-success"}
    //                         onClick={click}
    //                     >
    //                         Регистрация
    //                     </Button>
    //                 </Row>
    //
    //             </Form>
    //         </Card>
    //     </Container>
    // );

    return (
        <div className={styles.signUp}>
            <form>
                <h2 className={styles.title}>SignUp Form </h2>
                <div className={styles.inputBox}>
                    <input
                        type="text"
                        placeholder="Введите имя"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.inputBox}>
                    <input
                        type="text"
                        placeholder="Введите email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.inputBox}>
                    <input
                        type="password"
                        placeholder="Введите пароль"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className={styles.underline}></div>
                </div>
                <button type="submit" onClick={click}>Sign Up</button>
            </form>
            <p className={styles.link}>
                <span> Already have account? </span>
                <a href='/auth/login'>Log In</a>
            </p>
        </div>
    );
};

export default SignUpForm;