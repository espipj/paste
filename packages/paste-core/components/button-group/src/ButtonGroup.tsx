import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/core/box';
import {styled, css} from '@twilio-paste/styling-library';
import type {BoxProps} from '@twilio-paste/core/box';
import type {ButtonProps} from '@twilio-paste/core/button';

const AttachedStyled = styled.div(
  css({
    '& > button:not(:first-of-type):not(:last-of-type)': {
      borderRadius: 0,
    },
    '& > button:first-of-type': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    '& > button:last-of-type': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  })
);

const UnattachedStyled = styled.div(
  css({
    '& > button:not(:first-of-type)': {
      marginLeft: 'space30',
    },
    '& > button:first-of-type': {
      marginLeft: 'space0',
    },
  })
);

export interface ButtonGroupProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  boxProps?: Partial<Omit<BoxProps, 'children'>>;
  btnProps?: Partial<Omit<ButtonProps, 'children'>>;
  element?: string;
  attached?: boolean;
  children: React.ReactElement | React.ReactElement[];
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({element = 'BUTTON_GROUP', children, attached = false, boxProps = {}, btnProps = {}}, ref) => {
    return (
      <Box
        // @ts-expect-error Render overlay as box for customization
        as={attached ? AttachedStyled : UnattachedStyled}
        ref={ref}
        element={element}
        padding="space50"
        display="flex"
        {...safelySpreadBoxProps(boxProps)}
        role="group"
      >
        {React.Children.map(children, (child: React.ReactElement) =>
          React.cloneElement(child, btnProps, child.props.children)
        )}
      </Box>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  children: PropTypes.oneOf([PropTypes.elementType, PropTypes.arrayOf(PropTypes.elementType)]).isRequired,
};
