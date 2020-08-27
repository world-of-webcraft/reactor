import React from 'react';
import { StyledAnchor_ID0 } from '../../atoms';
import { StyledIcon_ID0 } from '../../atoms';

export const ImageAnchor_ID0 = ({ ...props }) => {
    return (
        <StyledAnchor_ID0 {...props} padding={props.padding}>
            <StyledIcon_ID0 src={props.imageSrc}></StyledIcon_ID0>
        </StyledAnchor_ID0>
    );
}