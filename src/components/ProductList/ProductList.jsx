import React from "react";
import Product from "./Product";

const ProductList = ({products}) => {

  const productComponents = products.map(product => <Product key={product.id} product={product}/>)


  return (<section>

    Product List
    {productComponents}
    </section>);
};

export default ProductList;
