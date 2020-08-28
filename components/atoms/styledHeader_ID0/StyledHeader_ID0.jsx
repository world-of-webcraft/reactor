import styled from 'styled-components';

/**
 * Header with default grid area h.
 * Can have a given background and a given max/min height.
 */

export const StyledHeader_ID0 = styled.header`
    grid-area: ${({gridArea}) => gridArea ? gridArea : "h"};;
    background-image: ${({background}) => 'url("' + background + '")'};
    max-height: ${({maxHeight}) => maxHeight ? maxHeight : "500px"};
    min-height: ${({minHeight}) => minHeight};
`;
