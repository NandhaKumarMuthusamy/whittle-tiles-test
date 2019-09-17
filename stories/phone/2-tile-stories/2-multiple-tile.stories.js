// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MockTileGrid, generateImage } from "@ombiel/cm-tile-sdk/dev";

import Phone from "../../../src/client/tiles/phone/components/phone";

const stories = storiesOf('Phone | Tile / Multiple', module);

stories.addDecorator(withKnobs);

const items = [
  {
    tileComponent: Phone,
    menuOption: {
      desc: "Tile One",
      image: generateImage("Tile One"),
      backgroundColor: "#993366",
      order: -1,
    }
  },
  {
    tileComponent: Phone,
    menuOption: {
      desc: "Tile 2",
      img: generateImage("Tile 2","#993366"),
      backgroundColor: "#993366",
      tileWidth: 2,
      order: 15,
    }
  },
  {
    tileComponent: Phone,
    menuOption: {
      desc: "Tile Three",
      backgroundColor: "#339966",
      order: 2,
    }
  },
  {
    tileComponent: Phone,
    menuOption: {
      desc: "Tile Four",
      backgroundColor: "#339999",
      img: generateImage("Tile Four", "#339999"),
      order: 9,
    }
  },

  {
    tileComponent: Phone,
    menuOption: {
      desc: "Tile Five",
      backgroundColor: "#336699",
      image: generateImage("Tile Five","#999999"),
      tileWidth: 3,
      order: 20,
    }
  },

  {
    tileComponent: Phone,
    menuOption: {
      desc: "Tile Six",
      backgroundColor: "#ff6600",
      image: generateImage("Tile Six"),
      tileHeight: 2,
      order: 4,
    }
  },
  {
    tileComponent: Phone,
    menuOption: {
      desc: "Tile Seven",
      backgroundColor: "#996699",
      image: generateImage("Tile Seven","#996699"),
      tileHeight: 2,
      tileWidth: 2,
    }
  },
];

stories.add('with multiple (default)', () => (
  <MockTileGrid 
    minCols="2"
    extraTiles="11"
    items={items}
    enableMocks
  />
));

stories.add('with multiple (dark)', () => (
  <MockTileGrid 
    minCols="2"
    maxCols="3"
    extraTiles="1"
    backgroundColor="#111111"
    gutter="2"
    tileStyle={{
      backgroundColor: "#333333",
    }}
    items={items}
    enableMocks
  />
));


