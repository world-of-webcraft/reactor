import styled, {keyframes} from 'styled-components';
import { bounce } from 'react-animations';

/**
 * A wrapper <div> element that has a bounce animation of a given length 
 * and a option if it should be looped to inifinity
 */

export const StyledAnimationWrapperID0 = styled.div`
    animation: ${({length}) => length ? length : "2s" } ${keyframes `${bounce}`} ${({infinite}) => infinite ? "infinite" : ""}
`
