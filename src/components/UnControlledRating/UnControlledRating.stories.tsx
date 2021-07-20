import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UnControlledRating} from "./UnControlledRating";

export default {
  title: 'UnControlledRating',
  component: UnControlledRating
};

const callback = action("rating changed inside component")

export const EmptyRating = () => <UnControlledRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UnControlledRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UnControlledRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UnControlledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UnControlledRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UnControlledRating defaultValue={5} onChange={callback}/>
