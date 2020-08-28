import styled from 'styled-components';

/**
 * Simple styled img that has a default size of 24x24
 * but can be given any size
 */

export const StyledIcon_ID0 = styled.img`
    width: ${({width}) => width ? width : '24px'};
    height: ${({height}) => height ? height : '24px'};
`;
