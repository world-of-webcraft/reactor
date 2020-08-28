import React from 'react';
import { StyledMenuLink_ID0 } from '../../atoms';

/**
 * Menu link composed of atom StyledMenuLink_ID0
 */

export const MenuLink_ID0 = ({ to, icon, active, children }) => {

  return (
    <StyledMenuLink_ID0 exact={true} to={to} activeClassName="link-active">
      {children}
    </StyledMenuLink_ID0>
  );
};
