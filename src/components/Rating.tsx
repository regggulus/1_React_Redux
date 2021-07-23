import React from "react";

export function Rating() {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}
function Star(props: any) {
    if(props.selected === true) {
    return (
        <span><b>star </b></span>
    )
    }else {
        return <span>star </span>
    }
}