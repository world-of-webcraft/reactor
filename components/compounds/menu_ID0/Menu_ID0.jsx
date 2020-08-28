import React from 'react';
import { bool, func } from 'prop-types';
import { StyledMenu_ID0 } from '../../atoms';
import { StyledButton_ID0 } from '../../atoms'
import { MenuLink_ID0 } from '../../molecules';

/**
 * Drawer menu
 * Composed of atoms:
 *  - StyledMenu_ID0
 *  - StyledButton_ID0
 * and of molecules:
 *  - MenuLink_ID0
 */

export const Menu_ID0 = ({itemsUrl, open, setOpen, ...props }) => {
    let items = require(itemsUrl);
    const isHidden = open ? true : false
    return (
        <StyledMenu_ID0 open={open} aria-hidden={!isHidden} {...props}>
            {items.map(({ path, icon, title }) => (
                <StyledButton_ID0 onClick={() => setOpen(false)}>
                    <MenuLink_ID0 key={path} to={path} icon={icon}>
                        {title}
                    </MenuLink_ID0>
                </StyledButton_ID0>
            ))
            }
        </StyledMenu_ID0>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
}

