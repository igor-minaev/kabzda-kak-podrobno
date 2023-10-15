import React, {useState} from "react";

type RatingPropsType = {}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('UncontrolledRating rendering')
    const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)

    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={() => setValue(1)}>1</button>
            <Star selected={value > 1}/>
            <button onClick={() => setValue(2)}>2</button>
            <Star selected={value > 2}/>
            <button onClick={() => setValue(3)}>3</button>
            <Star selected={value > 3}/>
            <button onClick={() => setValue(4)}>4</button>
            <Star selected={value > 4}/>
            <button onClick={() => setValue(5)}>5</button>
        </div>
    )
}

type StarType = {
    selected: boolean
}

function Star(props: StarType) {
    console.log('Star rendering')
    /* if (props.selected) {
         return <span><b>star</b> </span>
     } else {
         return <span>star </span>
     }*/

    return <span>{props.selected ? <b>star </b> : "star "}</span>
}