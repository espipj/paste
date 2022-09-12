import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Button} from '@twilio-paste/button';
import {ButtonGroup} from '../src';

describe('ButtonGroup', () => {
  it('should render visibly into document with children', () => {
    render(
      <ButtonGroup variant="secondary">
        <Button>foo</Button>
        <Button>bar</Button>
        <Button>baz</Button>
      </ButtonGroup>
    );

    expect(4);
    const btnGroup = screen.getByRole('group');
    expect(btnGroup).toBeVisible();

    screen.getAllByRole('button').forEach((btn) => {
      expect(btn).toBeVisible();
    });
  });
});
