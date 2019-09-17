// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories } from "@ombiel/cm-tile-sdk/dev";

import PaymentsFace from '../../../src/client/tiles/payments/components/payments-face';


const stories = storiesOf('Payments | Tile Face / Just Text', module);

addTileFaceStories(stories,<PaymentsFace text="Payments" />);
