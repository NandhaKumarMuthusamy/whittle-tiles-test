// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories, generateImage } from "@ombiel/cm-tile-sdk/dev";

import ClassesFace from '../../../src/client/tiles/classes/components/classes-face';

const image = generateImage("My Tile    ","#eeeeee");

const stories = storiesOf('Classes | Tile Face / With Icon', module);

addTileFaceStories(stories,<ClassesFace text="Classes" icon={image} />);
