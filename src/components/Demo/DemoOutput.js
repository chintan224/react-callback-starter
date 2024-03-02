const DemoOutput = (props) => {
    return (
        {console.log("DemoOutput Running")}
    <p>{props.show ? 'This is New' : ''}</p>
    )
}

export default React.memo(DemoOutput);