import React from "react";
import PropTypes from "prop-types";

import {
  Tile,
  TileBoard,
  TileFace,
  HBlock,
  Box,
  VBlock,
  TextBox,
  SvgBox,  
  useTileProps,
  useServerAction,
  CACHE_STRATEGY,
} from "@ombiel/cm-tile-sdk";

function CourseBlock({course, fontSize, url, ...otherProps}) {
  const notification = course.days > 99 ? "99+" : course.days; 
  
  return ( 
    <VBlock {...otherProps}>  
      <Box>    
        <SvgBox padding={[5, 0, 0, 0]}>
          <svg viewBox="0 0 100 100">
            <rect width="100" height="100" stroke="#8babb7" strokeWidth="5" fill="#FFFFFF" />
            <circle cx="90" cy="67" r="30" fill="#cf542a" />
            <text x="75" y="75" fill="white" fontSize="25" verticalAlign="center">{notification}</text>
          </svg>
        </SvgBox>
      </Box>    
      <TextBox minFontSize={fontSize} maxFontSize={fontSize} bold="true">{course.title.substring(0,15)}</TextBox>
    </VBlock>  
  );
}

CourseBlock.propTypes = {
  course: PropTypes.object,
  fontSize: PropTypes.number,
  url: PropTypes.string,
};

export default function MyCourses() {

  const tileProps = useTileProps();
  const {content: {text,image,icon}} = tileProps;

  const [{ responseBody }] = useServerAction(
    "get-my-courses",
    { cache: CACHE_STRATEGY.NETWORK_FIRST }
  );

  const courses = responseBody || [];

  const fontSize = 12;

  if (courses.length === 0) {
    return (
      <Tile>
        <TileBoard>
          <TileFace 
            key={`${text}_${image}`} 
            image={image} 
            icon={icon}
            text={text}
            backgroundColor="#FFFFFF"
          />
        </TileBoard>
      </Tile>
    );
  }

  return (
    <Tile>
      <TileBoard>
        <TileFace 
          key={`${text}_${image}`} 
          image={image} 
          icon={icon}          
          backgroundColor="#FFFFFF"
          borderColor="#FFFFFF"
        >  
          {courses[0] ? (            
            <VBlock>        
              <HBlock>                 
                <CourseBlock course={courses[0]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[0].id}`} />           
                
                {courses[1] ? (
                  <CourseBlock course={courses[1]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[1].id}`} />
                ) : (
                  <VBlock />
                )}
                {courses[2] ? (
                  <CourseBlock course={courses[2]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[2].id}`} />
                ) : (
                  <VBlock />
                )}
                {courses[3] ? (
                  <CourseBlock course={courses[3]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[3].id}`} />
                ) : (
                  <VBlock />
                )}
              </HBlock>
              {courses[4] ? (
                <HBlock>
                  <CourseBlock padding={[0, 0, 5]} borderColor="#8babb7" course={courses[4]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[4].id}`} />
                  
                  {courses[5] ? (
                    <CourseBlock padding={[0, 0, 5]} borderColor="#8babb7" course={courses[5]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[5].id}`} />
                  ) : (
                    <VBlock />
                  )}
                  {courses[6] ? (
                    <CourseBlock padding={[0, 0, 5]} borderColor="#8babb7" course={courses[6]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[6].id}`} />
                  ) : (
                    <VBlock />
                  )}
                  {courses[7] ? (
                    <CourseBlock padding={[0, 0, 5]} borderColor="#8babb7" course={courses[7]} fontSize={fontSize} url={`https://whittle-training.agilixbuzz.com/student/${courses[7].id}`} />
                  ) : (
                    <VBlock />
                  )}
                </HBlock>
              ) : (
                <HBlock />
              )}

              <TextBox 
                color="#000000" 
                minFontSize="20" 
                maxFontSize="20" 
                bold="true"
              >My Courses*
              </TextBox>
            </VBlock>
          ) : ( 
            <VBlock>
              <TextBox color="#000000">My Courses</TextBox> 
            </VBlock>
          )}
        </TileFace>
      </TileBoard>
    </Tile>
  );
}
