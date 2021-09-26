import styled from 'styled-components';

/**
 * Styled container with theme based colors 
 * for background and border if theme is provided and
 * prop useThme is set to true. The prop darkMode will
 * toggle between theme.primaryLight and theme.primaryDark
 * default value:
 * border-radius: 5px
 * padding: 25px
 * props:
 * useTheme: set to true if theme based colors should be used
 * darkMode: set to toggle from theme.primaryLight to theme.primaryDark
 * borderRadius: border-radius
 * padding: padding
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

export const StyledContainerID0 = styled.div`
    padding: ${({ padding }) => padding ? padding : "25px"};
    border-style: solid;
    color: ${({ theme, darkMode, useTheme }) => theme && useTheme == "true" ? setColorTheme(theme, darkMode) : "black"};
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : "5px"}; 
    border-color: ${({ theme, darkMode, useTheme }) => theme && useTheme === "true" ? setBorderTheme(theme, darkMode) : "black"};
    background-color: ${({ theme, darkMode, useTheme }) => theme && useTheme === "true" ? setBackgroundTheme(theme, darkMode) : "white"};
`;