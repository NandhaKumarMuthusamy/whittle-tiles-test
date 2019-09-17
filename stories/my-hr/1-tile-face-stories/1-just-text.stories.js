// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories } from "@ombiel/cm-tile-sdk/dev";

import MyHRFace from '../../../src/client/tiles/my-hr/components/my-hr-face';


const stories = storiesOf('My HR | Tile Face / Just Text', module);

addTileFaceStories(stories,<MyHRFace text="My HR" />);
