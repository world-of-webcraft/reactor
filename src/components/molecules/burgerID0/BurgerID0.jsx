import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurgerID0 } from '../../atoms';

/**
 * Burger menu
 */

export const BurgerID0 = ({ open, setOpen, ...props }) => {

    const isExpanded = open ? true : false;

    return (
        <StyledBurgerID0 aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
            <div />
            <div />
            <div />
        </StyledBurgerID0>
    )
}

BurgerID0.propTypes = {
      open: bool.isRequired,
      setOpen: func.isRequired,
};

