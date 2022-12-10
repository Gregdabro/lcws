import React from 'react';
import styles from  "./textField.module.scss"

const TextField = ({ label, type, name, value, onChange, error }) => {

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

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
                    <label className={styles.label} htmlFor={name}>{label}</label>
                </div>
                {error && <div className={styles.error}>{error}</div>}
            </div>
        </>
    );
};

export default TextField;