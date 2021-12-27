import React, {useState, useEffect} from "react";
import useFetch from "./useFetch.js";
import Product from "./Product.js";
import Loader from "./Loader.js";

export default function Products() {
  const [products, setProducts] = useState([]);
  const {get, loading} = useFetch("https://react-tutorial-demo.firebaseio.com/")

  useEffect(() => {
    get("supermarket.json").then(data => {
    console.log(data)
    setProducts(data)
    })
  }, [])

  return <><div className="products-layout">
  <h1>Products</h1>
  <p>Take a look at our products</p>
  {loading && <Loader/>}
  <div className="products-grid">
    {products && products.map(product => <Product key={product.id} details={product}/>)}
  </div>
</div></>;
}
