import React from 'react';
import Proptypes from 'prop-types';

const Applayout = ({ children }) => {
  return <div>{children}</div>;
};

Applayout.prototype = {
  children: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.node),
    Proptypes.node,
  ]),
};

export default Applayout;
