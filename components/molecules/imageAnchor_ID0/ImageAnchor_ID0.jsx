import React from 'react';
import { StyledAnchor_ID0 } from '../../atoms';
import { StyledIcon_ID0 } from '../../atoms';

/**
 * A <a> element that is a given image <ImageAnchor_ID0 src="url to image"> 
 * with size 24x24px 
 * margin can be set on the <ImageAnchor_ID0 margin="some value"> in order to
 * create space around the image
 */

export const ImageAnchor_ID0 = ({ ...props }) => {
    return (
        <StyledAnchor_ID0 {...props}>
            <StyledIcon_ID0 src={props.imageSrc}></StyledIcon_ID0>
        </StyledAnchor_ID0>
    );
}