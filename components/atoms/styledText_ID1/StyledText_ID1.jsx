import styled from 'styled-components';

/**
  * A paragraph with border solid, a mild radius and
  * themed background color if provided.
  * default values:
  * border-radius: 25px
  * props:
  * borderRadius: border-radius
  */
export const StyledText_ID1 = styled.p`
    background-color: ${({ theme }) => {
    if (theme) {
      if (theme.primaryLight) {
        theme.primaryLight
      } else if (theme.primaryDark) {
        theme.primaryDark
      }
    }
  }};
  border-style: solid;
  border-radius: ${({borderRadius}) => borderRadius ? borderRadius : "25px"};
`
