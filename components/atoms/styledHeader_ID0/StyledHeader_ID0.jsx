import styled from 'styled-components';

export const StyledHeader_ID0 = styled.header`
    grid-area: h;
    background-image: ${({background}) => 'url("' + background + '")'};
    max-height: ${({maxHeight}) => maxHeight ? maxHeight : "500px"};
`;
