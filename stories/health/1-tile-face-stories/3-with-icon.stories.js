// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories, generateImage } from "@ombiel/cm-tile-sdk/dev";

import HealthFace from '../../../src/client/tiles/health/components/health-face';

const image = generateImage("My Tile    ","#eeeeee");

const stories = storiesOf('Health | Tile Face / With Icon', module);

addTileFaceStories(stories,<HealthFace text="Health" icon={image} />);
