import React from "react";

export default function ProductDetailInfo(props) {
  return <><p>
  {props.description} sold at <strong>${props.price}</strong> per piece.
</p>
<button>${props.price}</button></>;
}
