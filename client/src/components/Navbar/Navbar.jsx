import React from "react";
import styles from "./Navbar.module.scss";
import IMAGES from "../../constants/images";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.logo}>
                <img src={IMAGES.logo} alt="logo"/>
            </a>
            <ul className={styles.navLinks}>
                <li>
                    <a href="/">home</a>
                </li>
                <li>
                    <a href="/products">shop</a>
                </li>
                <li>
                    <a href="/about">about</a>
                </li>
                <li>
                    <a href="/contact">contact</a>
                </li>
            </ul>
            <ul className={styles.navLinks}>
                <li>
                    <a href="/auth">login</a>
                </li>
                <li>
                    <a href="/basket">basket</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
