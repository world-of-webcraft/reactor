import styled from 'styled-components';

/**
  * Rainbow text 
  */
export const StyledText_ID0 = styled.span`
    background-image: linear-gradient(to left, violet, indigo, green, blue, yellow, orange, red);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    transition: 1s;
    opacity: ${({opacity}) => opacity};
    filter: saturate(${({saturation}) => saturation});
    &:hover {
        color: ${({ theme }) => theme.primaryHover};
        background-image: initial;
        background-clip: initial;
      }
`
