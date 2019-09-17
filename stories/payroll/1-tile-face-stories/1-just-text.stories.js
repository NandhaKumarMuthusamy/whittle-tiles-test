// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories } from "@ombiel/cm-tile-sdk/dev";

import PayrollFace from '../../../src/client/tiles/payroll/components/payroll-face';


const stories = storiesOf('Payroll | Tile Face / Just Text', module);

addTileFaceStories(stories,<PayrollFace text="Payroll" />);
