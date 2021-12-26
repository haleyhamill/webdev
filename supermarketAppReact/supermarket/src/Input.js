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
    <label class="label">
    {props.placeholder}
        {props.required && <span class="input-required">*</span>}
    <div>
        <input required={props.required} className={classNames} type={types} {...rest}/>
    </div>
    </label>
    </>);
}