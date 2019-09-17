// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories, generateImage } from "@ombiel/cm-tile-sdk/dev";

import MyCoursesFace from '../../../src/client/tiles/my-courses/components/my-courses-face';

const image = generateImage("My Tile    ","#eeeeee");

const stories = storiesOf('My Courses | Tile Face / With Icon', module);

addTileFaceStories(stories,<MyCoursesFace text="My Courses" icon={image} />);
