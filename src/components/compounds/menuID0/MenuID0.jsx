import { bool, func } from 'prop-types';
import { StyledMenuID0 } from '../../atoms';
import { StyledButtonID0 } from '../../atoms'
import { MenuLinkID0 } from '../../molecules';

/**
 * Drawer menu
 * Composed of atoms:
 *  - StyledMenu_ID0
 *  - StyledButton_ID0
 * and of molecules:
 *  - MenuLink_ID0
 */

export const MenuID0 = ({itemsUrl, open, setOpen, ...props }) => {
    let items = require(itemsUrl);
    const isHidden = open ? true : false
    return (
        <StyledMenuID0 open={open} aria-hidden={!isHidden} {...props}>
            {items.map(({ path, icon, title }) => (
                <StyledButtonID0 onClick={() => setOpen(false)}>
                    <MenuLinkID0 key={path} to={path} icon={icon}>
                        {title}
                    </MenuLinkID0>
                </StyledButtonID0>
            ))
            }
        </StyledMenuID0>
    )
}

MenuID0.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
}

