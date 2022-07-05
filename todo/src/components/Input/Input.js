const Input = (props) => {
    return (
        <input ref={props.propsRef} onChange={props.onChange} type={props.type} />
    )
}

export default Input