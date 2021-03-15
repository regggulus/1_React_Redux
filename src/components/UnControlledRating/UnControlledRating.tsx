import React, {useState} from 'react';

type RatingPropsType = {
}

export function UnControlledRating(props: RatingPropsType) {

    const [value, setValue] = useState(0 | 1 | 2 | 3 | 4)
        return (
            <div >
                <Star selected={value > 0} />
                <Star selected={value > 1} />
                <Star selected={value > 2} />
                <Star selected={value > 3} />
                <Star selected={value > 4} />

            </div>
        )
    }
export type StarPropsType = {
    selected: boolean
    value: number
}
function Star(props: StarPropsType) {
    return <span onClick={ () => {setValue(1)}}>{props.selected ? <b>star</b> : "star"}</span>

        /*if (props.selected === true) {
           return <span><b>star </b></span>
        }else {
           return <span>star </span>
        }*/
}
