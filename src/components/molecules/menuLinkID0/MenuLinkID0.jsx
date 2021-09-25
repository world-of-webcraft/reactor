import React from 'react';
import { StyledMenuLinkID0 } from '../../atoms';

/**
 * Menu link composed of atom StyledMenuLink_ID0
 */

export const MenuLinkID0 = ({ to, icon, active, children }) => {

  return (
    <StyledMenuLinkID0 exact={true} to={to} activeClassName="link-active">
      {children}
    </StyledMenuLinkID0>
  );
};
