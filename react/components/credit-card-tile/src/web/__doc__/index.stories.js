import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import CreditCardA from '../variants/credit-card-a/container';
import CreditCardB from '../variants/credit-card-b/container';

const creditCardTile = storiesOf('Credit Card Tile', module);

creditCardTile.add('CreditCardA', () => (
  <CreditCardA />
));

creditCardTile.add('CreditCardB', () => (
  <CreditCardB />
))
