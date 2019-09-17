// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories,generateImage } from "@ombiel/cm-tile-sdk/dev";

import MyStudioFace from '../../../src/client/tiles/my-studio/components/my-studio-face';

const image = generateImage("My Tile ","#556666");

const stories = storiesOf('My Studio | Tile Face / With Image', module);

addTileFaceStories(stories,<MyStudioFace image={image} text="My Studio" />);
