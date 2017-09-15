import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import ComponentStory from './component.story';

storiesOf('Button', module)
  .add('basic', () => (
    <ComponentStory />
  ));
