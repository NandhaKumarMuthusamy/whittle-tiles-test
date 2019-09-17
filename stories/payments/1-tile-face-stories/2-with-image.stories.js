// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories,generateImage } from "@ombiel/cm-tile-sdk/dev";

import PaymentsFace from '../../../src/client/tiles/payments/components/payments-face';

const image = generateImage("My Tile ","#556666");

const stories = storiesOf('Payments | Tile Face / With Image', module);

addTileFaceStories(stories,<PaymentsFace image={image} text="Payments" />);
