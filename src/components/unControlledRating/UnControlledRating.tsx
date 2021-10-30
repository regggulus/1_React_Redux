import React, {useState} from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UnControlledRating(props: RatingPropsType) {
let [selected, setSelected] = useState(false)

    return (
        <div>
            <Star selected={props.value > 0}/><button onClick={ () => {setSelected(true)}}>1</button>
            <Star selected={props.value > 1}/><button onClick={ () => {setSelected(true)}}>2</button>
            <Star selected={props.value > 2}/><button onClick={ () => {setSelected(true)}}>3</button>
            <Star selected={props.value > 3}/><button onClick={ () => {setSelected(true)}}>4</button>
            <Star selected={props.value > 4}/><button onClick={ () => {setSelected(true)}}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    // onClick: boolean
}

function Star(props: StarPropsType) {
    return (
        props.selected === true ? <span><b>star </b></span> : <span>star </span>
    )
}