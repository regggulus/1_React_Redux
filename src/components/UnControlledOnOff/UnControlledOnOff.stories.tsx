import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UnControlledOnOff} from "./UnControlledOnOff";

export default {
  title: 'UnControlledOnOff',
  component: UnControlledOnOff
};
const callback = action('on or off clicked')
export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UnControlledOnOff defaultOn={false} onChange={callback}/>

