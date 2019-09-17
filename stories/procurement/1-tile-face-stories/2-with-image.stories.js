// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories,generateImage } from "@ombiel/cm-tile-sdk/dev";

import ProcurementFace from '../../../src/client/tiles/procurement/components/procurement-face';

const image = generateImage("My Tile ","#556666");

const stories = storiesOf('Procurement | Tile Face / With Image', module);

addTileFaceStories(stories,<ProcurementFace image={image} text="Procurement" />);
