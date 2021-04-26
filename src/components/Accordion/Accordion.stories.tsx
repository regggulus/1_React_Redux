import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
  title: 'Accordion',
  component: Accordion
};
const callback = action('accordion mode change event fired')
export const CollapsedMode = () => <Accordion collapsed={true} title={'Menu'} onChange={callback}/>
export const OffMode = () => <Accordion collapsed={false} title={"Users"} onChange={callback}/>

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion collapsed={value} title={"Users"} onChange={() => {setValue(!value)}}/>
}
