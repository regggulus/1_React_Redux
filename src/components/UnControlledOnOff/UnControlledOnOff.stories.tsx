import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UnControlledOnOff} from "./UnControlledOnOff";

export default {
  title: 'UnControlledOnOff',
  component: UnControlledOnOff
};
const callback = action('on or off clicked')
export const UnControlledOnMode = () => <UnControlledOnOff defaultOn={true} onChange={callback}/>
export const UnControlledOffMode = () => <UnControlledOnOff defaultOn={false} onChange={callback}/>

