import React from "react";
import styles from "./ProductList.module.scss";
import { Link, useRouteMatch } from "react-router-dom";
import IMAGES from "../../constants/images";
import {HiOutlineHeart} from  "react-icons/hi2"
import {HiOutlineShoppingCart} from "react-icons/hi2";

const ProductList = ({productList}) => {
    let { url } = useRouteMatch();
    return (
        <ul className={styles.productList}>
            {productList && productList.map((item) => (
                <li className={styles.productListItem}>
                    <div className={styles.cardBanner}>
                        <img
                            src={IMAGES[item.image]}
                            alt="pic"
                            className={styles.imageContain}
                        />

                        <div className={styles.cardBadge}>Popular</div>

                        <ul className={styles.cardActionList}>
                            <li className={styles.cardActionItem}>
                                <button className={styles.cardActionBtn}>
                                    <HiOutlineHeart/>
                                </button>
                            </li>
                            <li className={styles.cardActionItem}>
                                <button className={styles.cardActionBtn}>
                                    <HiOutlineShoppingCart/>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>
                            <Link to={`${url}/${item._id}`}>{item.name}</Link>
                        </h3>
                        <div className={styles.cardPrice}><span>€</span> {item.price}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
