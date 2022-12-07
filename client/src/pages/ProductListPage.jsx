import React from "react";
import ProductList from "../components/ProductList/ProductList";

const ProductListPage = () => {
    const skeletonCount = 4;

    // const loadingStatus = useSelector(loadingStatusSelector());
    // const products = useSelector(postsListSelector());
    // const displaySkeleton = loadingStatus === "idle" || loadingStatus === "pending";

    const products = [
        {
            id: "1",
            name: 'Nike Slim shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: 'pinewood_bridle',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt',
        },
        {
            id: "2",
            name: 'Adidas Fit Shirt',
            slug: 'adidas-fit-shirt',
            category: 'Shirts',
            image: 'mayfair_bridle',
            price: 250,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            id: "3",
            name: 'Nike Slim Pant',
            slug: 'nike-slim-pant',
            category: 'Pants',
            image: 'aspley_bridle',
            price: 25,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            id: "4",
            name: 'Adidas Fit Pant',
            slug: 'adidas-fit-pant',
            category: 'Pants',
            image: 'bakers_bridle',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            id: "5",
            name: 'Nike Slim shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: 'pinewood_bridle',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt',
        },
        {
            id: "6",
            name: 'Adidas Fit Shirt',
            slug: 'adidas-fit-shirt',
            category: 'Shirts',
            image: 'mayfair_bridle',
            price: 250,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            id: "7",
            name: 'Nike Slim Pant',
            slug: 'nike-slim-pant',
            category: 'Pants',
            image: 'aspley_bridle',
            price: 25,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            id: "8",
            name: 'Adidas Fit Pant',
            slug: 'adidas-fit-pant',
            category: 'Pants',
            image: 'bakers_bridle',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            id: "9",
            name: 'Nike Slim shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: 'pinewood_bridle',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt',
        },
        {
            id: "10",
            name: 'Adidas Fit Shirt',
            slug: 'adidas-fit-shirt',
            category: 'Shirts',
            image: 'mayfair_bridle',
            price: 250,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            id: "11",
            name: 'Nike Slim Pant',
            slug: 'nike-slim-pant',
            category: 'Pants',
            image: 'aspley_bridle',
            price: 25,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            id: "12",
            name: 'Adidas Fit Pant',
            slug: 'adidas-fit-pant',
            category: 'Pants',
            image: 'bakers_bridle',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        }
    ];

    const displaySkeleton = false

    return (
        <div style={{paddingTop: 200}}>
            <ProductList>
                {displaySkeleton ?
                    new Array(skeletonCount)
                    .fill("")
                    .map((_,index) => (
                        <ProductList.ItemSkeleton key={"skeleton" + index}/>
                    ))
                    : products.map(item => (
                        <ProductList.Item key={"product" + item.id} item={item}/>
                    ))
                }
            </ProductList>
            {/*<PostsList>*/}
            {/*    {displaySkeleton &&*/}
            {/*        new Array(skeletonCount)*/}
            {/*        .fill("")*/}
            {/*        .map((_, index) => (*/}
            {/*            <PostsList.ItemSkeleton key={"skeleton" + index} />*/}
            {/*        ))}*/}
            {/*    {posts &&*/}
            {/*        !displaySkeleton &&*/}
            {/*        posts.map((item) => (*/}
            {/*            <PostsList.Item key={"post" + item.id} item={item} />*/}
            {/*        ))}*/}
            {/*</PostsList>*/}
        </div>
    );
};

export default ProductListPage;
