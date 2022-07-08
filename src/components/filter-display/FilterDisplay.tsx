import React from 'react';

import './FilterDisplay.scss';

const FilterDisplay = ({ children }: { children?: React.ReactNode }) => {
  return <div className="filter-display">{children}</div>;
};

export default FilterDisplay;
