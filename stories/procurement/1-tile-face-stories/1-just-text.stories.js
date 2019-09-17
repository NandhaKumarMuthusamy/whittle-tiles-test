// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories } from "@ombiel/cm-tile-sdk/dev";

import ProcurementFace from '../../../src/client/tiles/procurement/components/procurement-face';


const stories = storiesOf('Procurement | Tile Face / Just Text', module);

addTileFaceStories(stories,<ProcurementFace text="Procurement" />);
