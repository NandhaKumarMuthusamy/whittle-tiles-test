// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories,generateImage } from "@ombiel/cm-tile-sdk/dev";

import MyHRFace from '../../../src/client/tiles/my-hr/components/my-hr-face';

const image = generateImage("My Tile ","#556666");

const stories = storiesOf('My HR | Tile Face / With Image', module);

addTileFaceStories(stories,<MyHRFace image={image} text="My HR" />);
