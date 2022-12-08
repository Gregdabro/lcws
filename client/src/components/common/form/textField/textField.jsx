import React from 'react';
import styles from  "./textField.module.scss"

const TextField = ({ label, type, name, value, onChange, error }) => {
    // const [showPassword, setShowPassword] = useState(false);

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    // const toggleShowPassword = () => {
    //     setShowPassword((prevState) => !prevState);
    // };


    return (
        <>
            <div className={styles.inputBox}>
                <div className={styles.inputWrapper}>
                    <input
                        type={type}
                        id={name}
                        name={name}
                        value={value}
                        onChange={handleChange}
                    />
                    {/*{type === "password" && (*/}
                    {/*    <button*/}
                    {/*        className="btn btn-outline-secondary"*/}
                    {/*        type="button"*/}
                    {/*        // onClick={toggleShowPassword}*/}
                    {/*    >*/}
                    {/*        <i*/}
                    {/*            className={*/}
                    {/*                "bi bi-eye" + (showPassword ? "-slash" : "")*/}
                    {/*            }*/}
                    {/*        ></i>*/}
                    {/*    </button>*/}
                    {/*)}*/}
                    <label className={styles.label} htmlFor={name}>{label}</label>
                </div>
                {error && <div className={styles.error}>{error}</div>}
            </div>
        </>
    );
};

export default TextField;