import styled, {keyframes} from 'styled-components';
import { bounce } from 'react-animations';

export const StyledAnimationWrapper_ID0 = styled.div`
    animation: ${({length}) => length ? length : "2s" } ${keyframes `${bounce}`} ${({infinte}) => infinte ? "infinte" : ""}
`
