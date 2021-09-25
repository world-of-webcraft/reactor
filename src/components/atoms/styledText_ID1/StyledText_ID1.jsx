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
        return theme.primaryLight
      } else if (theme.primaryDark) {
        return theme.primaryDark
      }
    }
  }};
  border-style: solid;
  padding: 20px;
  border-radius: ${({borderRadius}) => borderRadius ? borderRadius : "25px"};
`
