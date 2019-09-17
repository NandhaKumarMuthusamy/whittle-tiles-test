// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories } from "@ombiel/cm-tile-sdk/dev";

import HealthFace from '../../../src/client/tiles/health/components/health-face';


const stories = storiesOf('Health | Tile Face / Just Text', module);

addTileFaceStories(stories,<HealthFace text="Health" />);
