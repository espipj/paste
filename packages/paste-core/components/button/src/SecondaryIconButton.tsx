import * as React from 'react';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {SizeStyles, BaseStyles, ToggleIconButtonStyles} from './styles';
import type {DirectButtonProps} from './types';
import {DirectButtonPropTypes} from './proptypes';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('deepmerge');

/*
 * defensively resetting 'color' on pseudostyles from over zealous
 * legacy global styles "a {...}" when button is set as an anchor
 */
const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: 'colorTextIcon',
  _hover: {
    color: 'colorText',
  },
  _focus: {
    color: 'colorText',
  },
  _active: {
    color: 'colorText',
  },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: 'colorText',
});

const disabledStyles = merge(BaseStyles.disabled, {
  color: 'colorTextWeaker',
  _pressed: {
    backgroundColor: 'colorBackgroundStrong',
    color: 'colorTextWeak',
  },
  _pressed_hover: {
    backgroundColor: 'colorBackgroundStrong',
    color: 'colorTextWeak',
  },
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const SecondaryIconButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({size, buttonState, fullWidth, pressed, ...props}, ref) => {
    const toggleStyles = pressed === undefined ? {} : ToggleIconButtonStyles;

    // Must spread size styles after button styles
    return (
      <Box
        ref={ref}
        aria-pressed={pressed}
        width={fullWidth ? '100%' : 'auto'}
        {...safelySpreadBoxProps(props)}
        {...toggleStyles}
        {...ButtonStyleMapping[buttonState]}
        {...SizeStyles[size]}
      />
    );
  }
);
SecondaryIconButton.defaultProps = {
  as: 'button',
};
if (process.env.NODE_ENV === 'development') {
  SecondaryIconButton.propTypes = DirectButtonPropTypes;
}
SecondaryIconButton.displayName = 'SecondaryIconButton';

export {SecondaryIconButton};
