// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories, generateImage } from "@ombiel/cm-tile-sdk/dev";

import BenefitsFace from '../../../src/client/tiles/benefits/components/benefits-face';

const image = generateImage("My Tile    ","#eeeeee");

const stories = storiesOf('Benefits | Tile Face / With Icon', module);

addTileFaceStories(stories,<BenefitsFace text="Benefits" icon={image} />);
