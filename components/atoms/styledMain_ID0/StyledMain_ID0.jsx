import styled from 'styled-components';

/**
 * Main body container with default grid area m
 */

export const StyledMain_ID0 = styled.main`
grid-area: ${({gridArea}) => gridArea ? gridArea : "m"};
`;
