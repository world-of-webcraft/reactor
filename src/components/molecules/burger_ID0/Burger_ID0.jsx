import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger_ID0 } from '../../atoms';

/**
 * Burger menu
 */

export const Burger_ID0 = ({ open, setOpen, ...props }) => {

    const isExpanded = open ? true : false;

    return (
        <StyledBurger_ID0 aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
            <div />
            <div />
            <div />
        </StyledBurger_ID0>
    )
}

Burger.propTypes = {
      open: bool.isRequired,
      setOpen: func.isRequired,
};

