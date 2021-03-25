import React from 'react';
import Proptypes from 'prop-types';

const DashboardLayout = ({ children }) => {
  return <div>{children}</div>;
};

DashboardLayout.prototype = {
  children: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.node),
    Proptypes.node,
  ]),
};

export default DashboardLayout;
