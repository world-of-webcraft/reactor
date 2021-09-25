import styled from 'styled-components';

/**
 * Styled button with hover properties and color properties
 * derived from a theme
 */

export const StyledButtonID0 = styled.button`
    background: ${({ theme }) => theme.main.background};
    color: ${({ theme }) => theme.main};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    transition: color 0.3s linear;
    border: 3px solid ${({ theme }) => theme.main};

    &:hover {
        color: ${({ theme }) => theme.main.hover};
        background: ${({ theme }) => theme.main.background};
        border: 3px solid ${({ theme }) => theme.main};
    }
`;
