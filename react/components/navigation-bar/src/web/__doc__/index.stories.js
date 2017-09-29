import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import ComponentStory from './component';

storiesOf('Navigation Bar', module)
  .add('basic', () => (
    <ComponentStory />
  ));
