import React, {useState} from 'react';

type RatingPropsType = {
    // selected: () => void
}

export function UnControlledRating(props: RatingPropsType) {

    const [value, setValue] = useState(0 | 1 | 2 | 3 | 4)
        return (
            <div >
                <Star selected={value > 0} /><button onClick={ () => {setValue(1)}}>x</button>
                <Star selected={value > 1} /><button onClick={ () => {setValue(2)}}>x</button>
                <Star selected={value > 2} /><button onClick={ () => {setValue(3)}}>x</button>
                <Star selected={value > 3} /><button onClick={ () => {setValue(4)}}>x</button>
                <Star selected={value > 4} /><button onClick={ () => {setValue(5)}}>x</button>

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
