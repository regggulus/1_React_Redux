import React from 'react';


type OnOffPropsType = {
    on: boolean
}


export function OnOff(props: OnOffPropsType) {
    const onOffStyle = {
        padding: '10px'
    }
    const onStyle = {
        width: '40px',
        height: '30px',
        border: '2px solid black',
        // textAlign: 'center',
        marginBottom: '5px'
    }
    const offStyle = {
        width: '40px',
        height: '30px',
        border: '2px solid black',
        // textAlign: 'center',
        marginBottom: '5px'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        border: '2px solid black',
        borderRadius: '15px',
        backgroundColor: 'coral'
    }
    return (
        <div style={onOffStyle}>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}