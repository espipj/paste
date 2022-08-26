/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface CallHoldIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CallHoldIcon = React.forwardRef<HTMLElement, CallHoldIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `CallHoldIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[CallHoldIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 2.75a.75.75 0 011.5 0v3.5a.75.75 0 01-1.5 0v-3.5zm3 0a.75.75 0 011.5 0v3.5a.75.75 0 01-1.5 0v-3.5zM5.302 2.5c-.433 0-.851.172-1.16.48l-.483.482a3.95 3.95 0 00-.543 4.915l.001.002.015.023a31.55 31.55 0 008.48 8.468l.003.003a3.939 3.939 0 004.917-.526l.481-.481a1.654 1.654 0 00.487-1.175 1.662 1.662 0 00-.487-1.175l-2.03-2.026a1.647 1.647 0 00-1.788-.356c-.2.082-.381.203-.534.357a.653.653 0 01-.923 0L8.492 8.248a.63.63 0 010-.892 1.657 1.657 0 00.36-1.813 1.656 1.656 0 00-.36-.537L6.463 2.98a1.643 1.643 0 00-1.16-.481zm-.461 1.21a.653.653 0 01.923 0l2.029 2.026a.635.635 0 01.186.446.626.626 0 01-.186.446 1.66 1.66 0 000 2.35l3.245 3.241a1.643 1.643 0 002.322 0 .648.648 0 01.462-.19.656.656 0 01.462.19l2.03 2.026a.634.634 0 01.186.446.626.626 0 01-.186.446l-.482.48a2.949 2.949 0 01-3.66.409l-.006-.005a30.541 30.541 0 01-8.202-8.185l-.006-.01a2.917 2.917 0 01.4-3.635l.483-.481z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

CallHoldIcon.displayName = 'CallHoldIcon';
export {CallHoldIcon};
