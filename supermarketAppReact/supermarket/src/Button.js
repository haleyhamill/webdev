import React from "react";
import clsx from "clsx";

export default function Button(props) {
    const {children, ...rest} = props;
    const className = clsx({
        "btn-outline": props.outline,
        "btn-default": !props.outline
        })
    const classes = ("btn", className);
    return(<>
        <button className={classes} {...rest}>{children}</button>
    </>)
}