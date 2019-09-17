// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories,generateImage } from "@ombiel/cm-tile-sdk/dev";

import PayrollFace from '../../../src/client/tiles/payroll/components/payroll-face';

const image = generateImage("My Tile ","#556666");

const stories = storiesOf('Payroll | Tile Face / With Image', module);

addTileFaceStories(stories,<PayrollFace image={image} text="Payroll" />);
