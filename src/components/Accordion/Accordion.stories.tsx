import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
  title: 'Accordion',
  component: Accordion
};
const callback = action('accordion mode change event fired')
export const MenuCollapsedMode = () => <Accordion collapsed={true} title={'Menu'} onChange={callback}/>
export const UsersUnCollapsedMode = () => <Accordion collapsed={false} title={"Users"} onChange={callback}/>

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion title={"Users"} collapsed={value} onChange={() => setValue(!value)}/>
}
