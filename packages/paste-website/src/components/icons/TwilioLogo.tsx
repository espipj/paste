import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

export interface TwilioLogoProps {
  className?: string;
  size?: number;
  color?: string;
  title?: string;
  decorative?: boolean;
}

const TwilioLogo = React.memo(({title = 'Twilio Logo', decorative = true, className, color, size}: TwilioLogoProps) => {
  const titleId = useUID();
  return (
    <span style={{color, width: size, height: size, display: 'inline-block'}} className={className}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 88 24" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          d="M11.52 9.04c0 1.36-1.12 2.48-2.48 2.48-1.36 0-2.48-1.12-2.48-2.48 0-1.36 1.12-2.48 2.48-2.48 1.36 0 2.48 1.12 2.48 2.48zm-2.48 3.44c-1.36 0-2.48 1.12-2.48 2.48 0 1.36 1.12 2.48 2.48 2.48 1.36 0 2.48-1.12 2.48-2.48 0-1.36-1.12-2.48-2.48-2.48zM24 12c0 6.64-5.36 12-12 12S0 18.64 0 12 5.36 0 12 0s12 5.36 12 12zm-3.2 0c0-4.88-3.92-8.8-8.8-8.8-4.88 0-8.8 3.92-8.8 8.8 0 4.88 3.92 8.8 8.8 8.8 4.88 0 8.8-3.92 8.8-8.8zm-5.84.48c-1.36 0-2.48 1.12-2.48 2.48 0 1.36 1.12 2.48 2.48 2.48 1.36 0 2.48-1.12 2.48-2.48 0-1.36-1.12-2.48-2.48-2.48zm0-5.92c-1.36 0-2.48 1.12-2.48 2.48 0 1.36 1.12 2.48 2.48 2.48 1.36 0 2.48-1.12 2.48-2.48 0-1.36-1.12-2.48-2.48-2.48zm41.28-1.84c.08 0 .16.08.24.16v2.56c0 .16-.16.24-.24.24H52c-.16 0-.24-.16-.24-.24V4.96c0-.16.16-.24.24-.24h4.24zm-.08 3.6H48c-.08 0-.24.08-.24.24l-1.04 4-.08.24-1.28-4.24c0-.08-.16-.24-.24-.24h-3.2c-.08 0-.24.08-.24.24l-1.2 4-.08.24-.08-.24-.48-2-.48-2c0-.08-.16-.24-.24-.24h-6.4V4.88c0-.08-.16-.24-.32-.16L28.4 6c-.16 0-.24.08-.24.24V8.4h-1.04c-.08 0-.24.08-.24.24v3.04c0 .08.08.24.24.24h1.04v3.76c0 2.64 1.44 3.84 4.08 3.84 1.12 0 2.16-.24 2.88-.64v-3.2c0-.16-.16-.24-.24-.16-.4.16-.8.24-1.12.24-.72 0-1.12-.32-1.12-1.12v-2.72h2.32c.08 0 .24-.08.24-.24V9.12l3.04 10.08c0 .08.16.24.24.24h3.36c.08 0 .24-.08.24-.24l1.44-4.48.72 2.32.64 2.16c0 .08.16.24.24.24h3.36c.08 0 .24-.08.24-.24l3.04-10.08V19.2c0 .08.08.24.24.24h4.08c.08 0 .24-.08.24-.24V8.56c0-.08-.08-.24-.16-.24zm5.36-3.6h-4.08c-.08 0-.24.08-.24.24v14.16c0 .08.08.24.24.24h4.08c.08 0 .24-.08.24-.24V4.88c0-.08-.08-.16-.24-.16zm5.44 0h-4.24c-.08 0-.24.08-.24.24v2.48c0 .08.08.24.24.24h4.24c.08 0 .24-.08.24-.24V4.88c0-.08-.08-.16-.24-.16zm-.08 3.6H62.8c-.08 0-.24.08-.24.24v10.48c0 .08.08.24.24.24h4.08c.08 0 .24-.08.24-.24V8.56c0-.08-.08-.24-.24-.24zm12.88 5.44c0 3.04-2.56 5.68-6.16 5.68-3.52 0-6.08-2.64-6.08-5.68 0-3.04 2.56-5.68 6.16-5.68 3.52 0 6.08 2.64 6.08 5.68zm-4.32.08c0-1.12-.8-2-1.76-1.92-1.04 0-1.76.88-1.76 1.92s.8 1.92 1.76 1.92c1.04 0 1.76-.88 1.76-1.92z"
        />
      </svg>
    </span>
  );
});

export default TwilioLogo;
