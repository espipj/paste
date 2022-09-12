import * as React from 'react';
import type {Story} from '@storybook/react';
import {Button} from '@twilio-paste/core/button';
//import {Box} from '@twilio-paste/box';

import {ButtonGroup} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Button Group',
  component: ButtonGroup,
};

// TODO hoist prop sharing to Button Group root
export const Unattached: Story = () => (
  <ButtonGroup btnProps={{variant: 'secondary'}}>
    <Button variant="primary">foo</Button>
    <Button variant="primary">bar</Button>
    <Button variant="primary">baz</Button>
  </ButtonGroup>
);

export const Attached: Story = () => (
  <ButtonGroup attached btnProps={{variant: 'secondary'}}>
    <Button variant="primary">foo</Button>
    <Button variant="primary">bar</Button>
    <Button variant="primary">baz</Button>
  </ButtonGroup>
);
