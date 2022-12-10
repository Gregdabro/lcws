import React from "react";
import ProductList from "../components/ProductList/ProductList";
import {useSelector} from "react-redux";
import {categoryListSelector} from "../store/categorySlice";
import {productListSelector} from "../store/productSlice";
// import {colorListSelector} from "../store/colorSlice";

const ProductListPage = () => {
    const productList = useSelector(productListSelector())
    const categoryList = useSelector(categoryListSelector())

    return (
        <div style={{paddingTop: 200}}>

            <div style={{display: "flex", gap: 20, justifyContent: "center", marginBottom: 50}}>{categoryList &&
                categoryList.map((item) => (
                    <button style={{padding: 10, textTransform: "uppercase", boxShadow: '0px 0px 5px #343434', background: "#929596", color: "white", fontWeight: 600 ,cursor: "pointer", border: "none", borderRadius: 3}} key={item._id}>{item.name}</button>
                ))}
            </div>

            <ProductList productList={productList}/>

            <div style={{textAlign: "center", height: 100, paddingTop:40}}>
                <button style={{backgroundColor: "transparent", color:"#343434",cursor: "pointer", border: "1px solid #343434", padding: 10, fontWeight: 600 }}>LOAD MORE</button>
            </div>
        </div>
    );
};

export default ProductListPage;
