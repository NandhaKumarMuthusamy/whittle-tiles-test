// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories,generateImage } from "@ombiel/cm-tile-sdk/dev";

import PhoneFace from '../../../src/client/tiles/phone/components/phone-face';

const image = generateImage("My Tile ","#556666");

const stories = storiesOf('Phone | Tile Face / With Image', module);

addTileFaceStories(stories,<PhoneFace image={image} text="Phone" />);
