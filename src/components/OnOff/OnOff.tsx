import React, {useState} from 'react';


type OnOffPropsType = {

}


export function OnOff(props: OnOffPropsType) {

    const [on, setOn] = useState(false)

    const onOffStyle = {
        padding: '10px'
    }
    const onStyle = {
        width: '40px',
        height: '30px',
        border: '2px solid black',
        margin: '5px',
        display: 'inline-block',
        backgroundColor: on ? "greenyellow" : "white"
    }
    const offStyle = {
        width: '40px',
        height: '30px',
        border: '2px solid black',
        margin: '5px',
        display: 'inline-block',
        backgroundColor: on ? "white" : "coral"
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        border: '2px solid black',
        borderRadius: '15px',
        display: 'inline-block',
        backgroundColor: on ? "greenyellow" : "coral"
    }
    return (
        <div style={onOffStyle}>
            <div style={onStyle} onClick={ () => {setOn(true)}}>On</div>
            <div style={offStyle} onClick={ () => {setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}