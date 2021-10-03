import React from "react";

export function Rating() {
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

function Star(props: any) {
    return (
        props.selected === true ? <span><b>star </b></span> : <span>star </span>
    )
}