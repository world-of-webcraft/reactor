import styled from 'styled-components';

/**
 * Simple footer with a given grid area, f by default 
 */

export const StyledFooter_ID0 = styled.footer`
    grid-area: ${({gridArea}) => gridArea ? gridArea : "f"};
`;
