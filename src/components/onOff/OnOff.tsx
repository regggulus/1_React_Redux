import React from "react";

type OnOffPropsType = {
    on: boolean
}

export function OnOff(props: OnOffPropsType) {


    return(
        <div>
            <div>On</div>
            <div>Off</div>
            <div></div>
        </div>
    )
}