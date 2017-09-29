
  import { configure } from '@storybook/react';
  configure(function loadStories() {
    require('../src/__doc__/index.stories.js');

require('../components/credit-card-tile/src/web/__doc__/index.stories.js');

require('../components/navigation-bar/src/web/__doc__/index.stories.js');

  }, module);
