import React from 'react';
import { StyledAnchorID0 } from '../../atoms';
import { StyledIconID0 } from '../../atoms';

/**
 * A <a> element that is a given image <ImageAnchor_ID0 src="url to image"> 
 * with size 24x24px 
 * margin can be set on the <ImageAnchor_ID0 margin="some value"> in order to
 * create space around the image
 */

export const ImageAnchorID0 = ({ ...props }) => {
    return (
        <StyledAnchorID0 {...props}>
            <StyledIconID0 src={props.imageSrc}></StyledIconID0>
        </StyledAnchorID0>
    );
}