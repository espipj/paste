import * as React from 'react';
import type {Story} from '@storybook/react';
import {Box} from '@twilio-paste/box';

import {CodeBlock, CodeBlockWrapper, CodeBlockHeader, CodeBlockTabList, CodeBlockTab, CodeBlockTabPanel} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Code Block',
  component: CodeBlock,
};

const jsCode = `(num) => num + 1`;

const rubyCode = `#!/usr/bin/ruby

# Import the library. This is a really really long line that should be wrapped.
require 'tk'

# Root window.
root = TkRoot.new  {
  title 'Push Me'
  background '#111188'
}

# Add a label to the root window.
lab = TkLabel.new(root) {
  text "Hey there,\nPush a button!"
  background '#3333AA'
  foreground '#CCCCFF'
}
`;

const phpCode = `<?php
require __DIR__ . '/vendor/autoload.php';
use TwilioRestClient;

// Your Account SID and Auth Token from twilio.com/console
$account_sid = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX';
$auth_token = 'your_auth_token';
// In production, these should be environment variables. E.g.:
// $auth_token = $_ENV["TWILIO_AUTH_TOKEN"]

// A Twilio number you own with SMS capabilities
$twilio_number = "+15017122661";

$client = new Client($account_sid, $auth_token);
$client->messages->create(
    // Where to send a text message (your cell phone?)
    '+15558675310',
    array(
        'from' => $twilio_number,
        'body' => 'I sent this message in under 10 minutes!'
    )
);`;

export const SingleLine: Story = () => <CodeBlock variant="single-line" language="javascript" code={jsCode} />;

export const SingleLineWithLink: Story = () => (
  <CodeBlock variant="single-line" language="javascript" code={jsCode} externalLink="https://www.google.com" />
);

export const MultiLine: Story = () => (
  <CodeBlockWrapper>
    <CodeBlockHeader>Build a button</CodeBlockHeader>
    <CodeBlock code={rubyCode} language="ruby" />
  </CodeBlockWrapper>
);

export const MultiLineWithLineNumbers: Story = () => (
  <CodeBlockWrapper>
    <CodeBlockHeader>Build a button</CodeBlockHeader>
    <CodeBlock code={rubyCode} language="ruby" showLineNumbers />
  </CodeBlockWrapper>
);

export const MultiLineWithLink: Story = () => (
  <CodeBlockWrapper>
    <CodeBlockHeader>Build a button</CodeBlockHeader>
    <CodeBlock code={rubyCode} language="ruby" externalLink="https://www.google.com" />
  </CodeBlockWrapper>
);

export const MultiLineWithNoLineWrap: Story = () => (
  <Box maxWidth="size40">
    <CodeBlockWrapper>
      <CodeBlockHeader>Build a button</CodeBlockHeader>
      <CodeBlock code={rubyCode} language="ruby" />
    </CodeBlockWrapper>
  </Box>
);

export const MultiLineWithLineWrap: Story = () => (
  <Box maxWidth="size40">
    <CodeBlockWrapper>
      <CodeBlockHeader>Build a button</CodeBlockHeader>
      <CodeBlock code={rubyCode} language="ruby" wrapLines />
    </CodeBlockWrapper>
  </Box>
);

export const CodeBlockWithMaxLines: Story = () => (
  <CodeBlockWrapper>
    <CodeBlockHeader>Build a button</CodeBlockHeader>
    <CodeBlock code={rubyCode} language="ruby" maxLines={3} showLineNumbers />
  </CodeBlockWrapper>
);

export const CodeBlockTabs: Story = () => (
  <CodeBlockWrapper>
    <CodeBlockHeader>How to set up your API</CodeBlockHeader>
    <CodeBlockTabList>
      <CodeBlockTab>Ruby</CodeBlockTab>
      <CodeBlockTab>PHP</CodeBlockTab>
    </CodeBlockTabList>
    <CodeBlockTabPanel>
      <CodeBlock externalLink="#" code={rubyCode} language="ruby" />
    </CodeBlockTabPanel>
    <CodeBlockTabPanel>
      <CodeBlock code={phpCode} language="php" />
    </CodeBlockTabPanel>
  </CodeBlockWrapper>
);

export const CodeBlockTabsWithMaxLines: Story = () => (
  <CodeBlockWrapper>
    <CodeBlockHeader>How to set up your API</CodeBlockHeader>
    <CodeBlockTabList>
      <CodeBlockTab>Ruby</CodeBlockTab>
      <CodeBlockTab>PHP</CodeBlockTab>
    </CodeBlockTabList>
    <CodeBlockTabPanel>
      <CodeBlock externalLink="#" code={rubyCode} language="ruby" maxLines={3} showLineNumbers />
    </CodeBlockTabPanel>
    <CodeBlockTabPanel>
      <CodeBlock code={phpCode} language="php" maxLines={3} showLineNumbers />
    </CodeBlockTabPanel>
  </CodeBlockWrapper>
);
