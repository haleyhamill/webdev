import React, {useState, useEffect} from "react";
import {NavLink, Switch, Route, useParams} from "react-router-dom";
import ProductDetailInfo from "./ProductDetailInfo.js";
import ProductDetailNutrition from "./ProductDetailNutrition.js";
import ProductDetailStorage from "./ProductDetailStorage.js";
import useFetch from "./useFetch.js";

export default function ProductDetails(props) {
  const [product, setProduct] = useState([]);
  const {get, loading} = useFetch("https://react-tutorial-demo.firebaseio.com/");
  let params = useParams();
  console.log(params);
  useEffect(() => {
    get(`productinfo/id${params.id}.json`).then(data => {
      console.log(data)
      setProduct(data)
    })
  }, [])

  return <><div className="product-details-layout">
  <div>
    <h2>{product.name}</h2>
    <img src={product.image} width="125" height="125" className="product-details-image" alt={product.name}
    />
  </div>
  <div>
    <div className="tabs">
      <ul>
        <li>
          <NavLink end to={`/products/${product.id}`}>Details</NavLink>
        </li>
        <li>
          <NavLink end to={`/products/${product.id}/nutrition`}>Nutrition</NavLink>
        </li>
        <li>
          <NavLink end to={`/products/${product.id}/storage`}>Storage</NavLink>
        </li>
      </ul>
    </div>
    <Switch>
      <Route exact path={`/products/${product.id}`}>
        <ProductDetailInfo price={product.price} description={product.description}/>
      </Route>
      <Route exact path={`/products/${product.id}/nutrition`}>
        <ProductDetailNutrition {...product.nutrition}/>
      </Route>
      <Route exact path={`/products/${product.id}/storage`}>
        <ProductDetailStorage storage={product.storage}/>
      </Route>
    </Switch>
  </div>
</div></>
}
