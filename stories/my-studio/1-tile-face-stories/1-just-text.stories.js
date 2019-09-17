// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories } from "@ombiel/cm-tile-sdk/dev";

import MyStudioFace from '../../../src/client/tiles/my-studio/components/my-studio-face';


const stories = storiesOf('My Studio | Tile Face / Just Text', module);

addTileFaceStories(stories,<MyStudioFace text="My Studio" />);
