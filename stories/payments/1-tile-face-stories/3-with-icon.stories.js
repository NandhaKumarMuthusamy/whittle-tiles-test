// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories, generateImage } from "@ombiel/cm-tile-sdk/dev";

import PaymentsFace from '../../../src/client/tiles/payments/components/payments-face';

const image = generateImage("My Tile    ","#eeeeee");

const stories = storiesOf('Payments | Tile Face / With Icon', module);

addTileFaceStories(stories,<PaymentsFace text="Payments" icon={image} />);
