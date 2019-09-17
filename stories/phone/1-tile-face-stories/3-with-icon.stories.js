// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories, generateImage } from "@ombiel/cm-tile-sdk/dev";

import PhoneFace from '../../../src/client/tiles/phone/components/phone-face';

const image = generateImage("My Tile    ","#eeeeee");

const stories = storiesOf('Phone | Tile Face / With Icon', module);

addTileFaceStories(stories,<PhoneFace text="Phone" icon={image} />);
