import React from "react";

import {
  Tile,
  TileBoard,
  TileFace,
  useTileProps,
} from "@ombiel/cm-tile-sdk";

export default function Classes() {
  
  const tileProps = useTileProps();
  const {content: {text,image,icon}} = tileProps;

  return (
    <Tile>
      <TileBoard>
        <TileFace 
          key={`${text}_${image}`} 
          text={text} 
          image={image} 
          icon={icon} 
        />
      </TileBoard>
    </Tile>
  );
}
