import { useParams } from "react-router-dom";

const Shop = (props) => {
    const params = useParams();
    console.log(params);
    return (
        <>
            <h1>Shop</h1>
            <h2>Product: {params.productid}</h2>
        </>
    )
}

export default Shop;