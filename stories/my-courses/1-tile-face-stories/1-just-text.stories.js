// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories } from "@ombiel/cm-tile-sdk/dev";

import MyCoursesFace from '../../../src/client/tiles/my-courses/components/my-courses-face';


const stories = storiesOf('My Courses | Tile Face / Just Text', module);

addTileFaceStories(stories,<MyCoursesFace text="My Courses" />);
