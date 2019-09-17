// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories, generateImage } from "@ombiel/cm-tile-sdk/dev";

import ReportFace from '../../../src/client/tiles/report/components/report-face';

const image = generateImage("My Tile    ","#eeeeee");

const stories = storiesOf('Report | Tile Face / With Icon', module);

addTileFaceStories(stories,<ReportFace text="Report" icon={image} />);
