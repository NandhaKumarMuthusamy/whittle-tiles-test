// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories } from "@ombiel/cm-tile-sdk/dev";

import MyGradesFace from '../../../src/client/tiles/my-grades/components/my-grades-face';


const stories = storiesOf('My Grades | Tile Face / Just Text', module);

addTileFaceStories(stories,<MyGradesFace text="My Grades" />);
