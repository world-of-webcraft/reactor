import styled from 'styled-components';

/**
 * Simple footer with a given grid area, f by default 
 */

export const StyledFooterID0 = styled.footer`
    grid-area: ${({gridArea}) => gridArea ? gridArea : "f"};
`;
