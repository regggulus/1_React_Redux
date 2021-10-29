import React, {useState} from "react";

type OnOffPropsType = {
    // on: boolean
}

export function OnOff(props: OnOffPropsType) {
    let [on, setOn] = useState(false)

const onStyle = {
    width: "30px",
    height: "15px",
    border: "1px solid black",
    margin: "10px 0px 5px 15px",
    display: "inline-block",
    backgroundColor: on ? "greenyellow" : "white"
}
const offStyle = {
    width: "30px",
    height: "15px",
    border: "1px solid black",
    marginLeft: "5px",
    display: "inline-block",
    backgroundColor: on ? "white" : "coral"
}
const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "greenyellow" : "coral"

}
    return(
        <div>
            <div onClick={ () => {setOn(true)}} style={onStyle}>On</div>
            <div onClick={ () => {setOn(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}