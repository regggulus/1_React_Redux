import React from "react";
import {on} from "cluster";

type OnOffPropsType = {
    on: boolean
}

export function OnOff(props: OnOffPropsType) {

const onStyle = {
    width: "30px",
    height: "15px",
    border: "1px solid black",
    margin: "10px 0px 5px 15px",
    display: "inline-block",
    backgroundColor: props.on ? "greenyellow" : "white"
}

const offStyle = {
    width: "30px",
    height: "15px",
    border: "1px solid black",
    marginLeft: "5px",
    display: "inline-block",
    backgroundColor: props.on ? "white" : "coral"
}

const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: props.on ? "greenyellow" : "coral"

}
    return(
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}