// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories, generateImage } from "@ombiel/cm-tile-sdk/dev";

import MyGradesFace from '../../../src/client/tiles/my-grades/components/my-grades-face';

const image = generateImage("My Tile    ","#eeeeee");

const stories = storiesOf('My Grades | Tile Face / With Icon', module);

addTileFaceStories(stories,<MyGradesFace text="My Grades" icon={image} />);
