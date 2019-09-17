// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories, generateImage } from "@ombiel/cm-tile-sdk/dev";

import PayrollFace from '../../../src/client/tiles/payroll/components/payroll-face';

const image = generateImage("My Tile    ","#eeeeee");

const stories = storiesOf('Payroll | Tile Face / With Icon', module);

addTileFaceStories(stories,<PayrollFace text="Payroll" icon={image} />);
