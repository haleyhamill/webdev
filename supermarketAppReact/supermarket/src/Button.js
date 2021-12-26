import React from "react";
import clsx from "clsx";

export default function Button(props) {
    const {className, ...rest} = props;
    const classes = clsx({
        "btn": true,
        "btn-outline": props.outline,
        "btn-default": !props.outline
    }, className)
    return <button className={classes} {...rest}>{props.children}</button>
}
