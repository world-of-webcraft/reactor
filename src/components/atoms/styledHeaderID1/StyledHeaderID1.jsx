import styled from 'styled-components';

/**
 * Header with default grid area h and with theme based colors
 * for background and border if theme is provided and
 * prop useThme is set to true. The prop darkMode will
 * toggle between theme.primaryLight and theme.primaryDark.
 * Can have a given background img and a given max/min height.
 * default value:
 * border-radius: 5px
 * padding: 25px
 * min-height: 
 * max-height: 500px
 * props:
 * useTheme: set to true if theme based colors should be used
 * darMode: set to toggle from theme.primaryLight to theme.primaryDark
 * borderRadius: border-radius
 * padding: padding
 * minHeight: min-height
 * max-height: max-height
 */

 const setBackgroundTheme = (theme, darkMode) => {
    if (theme) {
        if (!darkMode) {
            return theme.primaryLight
        } else if (darkMode) {
            return theme.primaryDark
        }
    }
}

const setBorderTheme = (theme, darkMode) => {
    if (theme) {
        if (!darkMode) {
            return theme.primaryDark
        } else if (darkMode) {
            return theme.primaryLight
        }
    }
}

const setColorTheme = (theme, darkMode) => {
    if (theme) {
        if (!darkMode) {
            return theme.primaryDark
        } else if (darkMode) {
            return theme.primaryLight
        }
    }
}

export const StyledHeaderID1 = styled.header`
    grid-area: ${({gridArea}) => gridArea ? gridArea : "h"};
    padding: ${({ padding }) => padding ? padding : "25px"};
    border-style: solid;
    background-size: cover;
    color: ${({ theme, darkMode, useTheme }) => theme && useTheme == "true" ? setColorTheme(theme, darkMode) : "black"};
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : "5px"}; 
    border-color: ${({ theme, darkMode, useTheme }) => theme && useTheme == "true" ? setBorderTheme(theme, darkMode) : "black"};
    background-color: ${({ theme, darkMode, useTheme }) => theme && useTheme == "true" ? setBackgroundTheme(theme, darkMode) : "white"};
    background-image: ${({background}) => 'url("' + background + '")'};
    max-height: ${({maxHeight}) => maxHeight ? maxHeight : "500px"};
    min-height: ${({minHeight}) => minHeight};
`;
