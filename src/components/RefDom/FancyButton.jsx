function FancyButton(props) {
    return (
        <button className="FancyButton">
            {props.children}
        </button>
    )
}

const FancyButton = React.forwardRef((props,ref)=>(
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));

const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;

