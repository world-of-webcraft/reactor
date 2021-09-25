import styled from 'styled-components';

/**
 * A grid wrapper with default grid template areas: h (header), m (main) ,f (footer)
 * with default column template and row template
 */

export const StyledGridWrapper_ID0 = styled.div`
    display: grid;
    grid-template-columns: ${({ gridTemplateCols }) =>
        gridTemplateCols ? gridTemplateCols : "repeat(12, 1fr)"};
    grid-template-rows: ${({ gridTemplateRows }) =>
        gridTemplateRows ? gridTemplateRows : "auto"};
    height: 100%;
    grid-template-areas: ${({ gridTemplateAreas }) =>
        gridTemplateAreas ? gridTemplateAreas :
            '"h h h h h h h h h h h h" "m m m m m m m m m m m m" "f f f f f f f f f f f f"'};
`
