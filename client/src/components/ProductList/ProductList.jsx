import React from "react";
import styles from "./ProductList.module.scss";
import { Link, useRouteMatch } from "react-router-dom";
import IMAGES from "../../constants/images";

const ProductList = ({ children }) => {
    return (
        <ul className={styles.productList}>
            {children}
        </ul>);
};

const ProductListItem = ({ item }) => {
    let { url } = useRouteMatch();

    return (
        <li className={styles.productListItem}>
            <div className={styles.cardBanner}>
                <img
                    src={IMAGES[item.image]}
                    width="312"
                    height="350"
                    alt="pic"
                    className={styles.imageContain}
                />

                <div className={styles.cardBadge}>Popular</div>

                <ul className={styles.cardActionList}>
                    <li className={styles.cardActionItem}>
                        <button className={styles.cardActionBtn}>
                            favorite
                        </button>
                    </li>
                    <li className={styles.cardActionItem}>
                        <button className={styles.cardActionBtn}>
                            add to cart
                        </button>
                    </li>
                </ul>
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                    <Link to={`${url}/${item.id}`}>{item.name}</Link>
                </h3>
                <span className={styles.cardProductRate}>*****</span>
                <div className={styles.cardPrice}>$180.85</div>
            </div>
        </li>
    );
}

const ProductListItemSkeleton = () => {
    return (
        <li className={styles.productListItemSkeleton}>
            <div className={styles.cardBanner}>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                    title
                </div>
                <span className={styles.cardProductRate}>*****</span>
                <div className={styles.cardPrice}>$1111111</div>
            </div>
        </li>
    );
}

ProductList.Item = ProductListItem;
ProductList.ItemSkeleton = ProductListItemSkeleton;

export default ProductList;
