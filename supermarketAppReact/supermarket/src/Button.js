import clsx from "clsx";

export default function Button(props) {
    const {children,...rest} = props;
    var className = clsx({
        "btn": true,
        "btn-outline": props.outline,
        "btn-default": !props.outline,
        })
    return(<>
        <button {...rest} className={className + " " + props.className}>{children}</button>
    </>)
}