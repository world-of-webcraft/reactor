import styled from 'styled-components';

/**
 * A flex container
 * default values:
 * flex-direction: column
 * align-items: center
 * justify-content: space-evenly
 */

export const StyledFlexContainer_ID0 = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : "column"};
    align-items: ${({ alignItems }) => alignItems ? alignItems : "center"};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "space-evenly"};
`
