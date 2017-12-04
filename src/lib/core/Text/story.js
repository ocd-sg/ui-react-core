// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import Text from './index'

storiesOf('core.Text', module)
  .add('basic', () => (
    <Text>This is some basic text.</Text>
  ))
  .add('sizes', () => (
    <div>
      <Text size='extra-large'>This is some <Text size='extra-large' weight='bold'>extra-large</Text> text.</Text><br />
      <Text size='large'>This is some <Text size='large' weight='bold'>large</Text> text.</Text><br />
      <Text size='normal'>This is some <Text size='normal' weight='bold'>normal</Text> text.</Text><br />
      <Text size='small'>This is some <Text size='small' weight='bold'>small</Text> text.</Text><br />
      <Text size='extra-small'>This is some <Text size='extra-small' weight='bold'>extra-small</Text> text.</Text><br />
    </div>
  ))
  .add('weights', () => (
    <div>
      <Text weight='normal'>This text is normal.</Text><br />
      <Text weight='bold'>This text is bold.</Text><br />
    </div>
  ))
  .add('transforms', () => (
    <div>
      <Text transform='lowercase'>This is some <Text transform='lowercase' weight='bold'>lowercase</Text> text.</Text><br />
      <Text transform='normal'>This is some <Text transform='normal' weight='bold'>normal</Text> text.</Text><br />
      <Text transform='uppercase'>This is some <Text transform='uppercase' weight='bold'>uppercase</Text> text.</Text><br />
      <Text transform='capitalize'>This is some <Text transform='capitalize' weight='bold'>capitalize</Text> text.</Text><br />
    </div>
  ))
