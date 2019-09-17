// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories } from "@ombiel/cm-tile-sdk/dev";

import ClassesFace from '../../../src/client/tiles/classes/components/classes-face';


const stories = storiesOf('Classes | Tile Face / Just Text', module);

addTileFaceStories(stories,<ClassesFace text="Classes" />);
