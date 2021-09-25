import styled from 'styled-components';

/**
 * A flex container
 * default values:
 * flex-direction: row
 * align-items: center
 * justify-content: space-evenly
 */

export const StyledFlexContainerID1 = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : "row"};
    align-items: ${({ alignItems }) => alignItems ? alignItems : "center"};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "space-evenly"};
`
