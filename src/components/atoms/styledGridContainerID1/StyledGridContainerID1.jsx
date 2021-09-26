import styled from 'styled-components';

/**
 * A grid wrapper with default grid template areas: h (header), m (main) ,f (footer)
 * with default column template and row template, with theme based colors if theme
 * is provided and useTheme prop is set to "true"
 * default values:
 * background-color: white
 * color: black
 * grid-template-areas: "h h h h h h h h h h h h" "m m m m m m m m m m m m" "f f f f f f f f f f f f"
 * grid-template-rows: auto
 * grid-template-columns: repeat(12, 1fr)
 * props:
 * useTheme: set to true if theme based colors should be used
 * darMode: set to toggle from theme.primaryLight to theme.primaryDark
 * gridTemplateAreas: grid-template-areas
 * gridTemplateRows: grid-template-rows
 * gridTemplateCols: grid-template-columns
 */

 const setColorTheme = (theme, darkMode) => {
    if (theme) {
        if (!darkMode) {
            return theme.primaryDark
        } else if (darkMode) {
            return theme.primaryLight
        }
    }
}

const setBackgroundTheme = (theme, darkMode) => {
    if (theme) {
        if (!darkMode) {
            return theme.primaryLight
        } else if (darkMode) {
            return theme.primaryDark
        }
    }
}

export const StyledGridContainerID1 = styled.div`
    display: grid;
    grid-template-columns: ${({ gridTemplateCols }) => gridTemplateCols ? gridTemplateCols : "repeat(12, 1fr)"};
    grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows ? gridTemplateRows : "auto"};
    height: 100%;
    grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas ? gridTemplateAreas : '"h h h h h h h h h h h h" "m m m m m m m m m m m m" "f f f f f f f f f f f f"'};
    color: ${({ theme, darkMode, useTheme }) => theme && useTheme == "true" ? setColorTheme(theme, darkMode) : "black"};
    background-color: ${({ theme, darkMode, useTheme }) => theme && useTheme == "true" ? setBackgroundTheme(theme, darkMode) : "white"};
`
