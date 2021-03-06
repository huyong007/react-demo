function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

export default function ListOfTenThings() {
    return (
        <Repeat numTimes={10}>
            {(index) => index >0 &&<div key={index}>This is item {index} in the list</div>}
        </Repeat>
    )
}