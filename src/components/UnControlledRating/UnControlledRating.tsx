import React from 'react';

type RatingPropsType = {

    // selected: boolean
}

export function UnControlledRating(props: RatingPropsType) {
let value = 0
        return (
            <div>
                <Star selected={value > 0}/>
                <Star selected={value > 1}/>
                <Star selected={value > 2}/>
                <Star selected={value > 3}/>
                <Star selected={value > 4}/>
            </div>
        )
    }
export type StarPropsType = {
    selected: boolean
}
function Star(props: StarPropsType) {
        if (props.selected === true) {
           return <span><b>star </b></span>
        }else {
           return <span>star </span>
        }
}
