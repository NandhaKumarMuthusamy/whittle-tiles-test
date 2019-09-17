import React from "react";

import {
  Tile,
  TileBoard,
  TileFace,  
  useTileProps,
} from "@ombiel/cm-tile-sdk";

export default function Benefits() {
  
  const tileProps = useTileProps();
  const {content: {text,image,icon}} = tileProps;

  return (
    <Tile>
      <TileBoard>
        <TileFace 
          key={`${text}_${image}`} 
          image={image}
          icon={icon}
          text={text}   
        />
      </TileBoard>
    </Tile>
  );
}
