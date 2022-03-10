import React, { useState } from "react";

function Star({ marked, starId }) {
    return <span star-id={starId} style={{ color: "#ffd700",fontSize:"40px" }}>
        {marked ? "\u2605" : "\u2606"}
    </span>
}

function StarRating(props) {
    const [rating, setRating] = useState(
        typeof props.rating == "number" ? props.rating : +props.rating
    )

    const [selection, setSelection] = React.useState(0);

    const hoverOver = event => {
        let val = 0;
        if (event && event.target && event.target.getAttribute("star-id")) {
            val = event.target.getAttribute("star-id");
        }
        setSelection(val);
    }
    return (
        <div
            onMouseOut={() => hoverOver(null)}
            onMouseOver={hoverOver}
            onClick={(event) => { setRating(event.target.getAttribute("star-id") || rating) }}
            >

            {Array.from({ length: 5 }, (v, i) => (
                <Star
                    starId={i + 1}
                    key={`star-${i + 1}`}
                    marked={selection ? selection >= i + 1 : rating >= i + 1} />
            ))}
        </div>

    )
}

export default StarRating;