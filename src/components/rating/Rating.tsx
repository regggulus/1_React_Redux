import React from "react";

type RatingPropsType = {

}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return (
        props.selected === true ? <span><b>star </b></span> : <span>star </span>
    )
}