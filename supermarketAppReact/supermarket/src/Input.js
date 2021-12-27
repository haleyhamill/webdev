import React from "react";
import clsx from "clsx";

export default function Input(props) {
    const {type, className, ...rest} = props;
    const types = clsx({
        "type": !type,
    }, type);
    const classNames = clsx({
        "input": true,
    }, className);
    
    return(<>
    <label className="label">
    {props.placeholder}
        {props.required && <span className="input-required">*</span>}
    <div>
        <input required={props.required} className={classNames} type={types} {...rest}/>
    </div>
    </label>
    </>);
}