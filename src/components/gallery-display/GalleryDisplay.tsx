import React from 'react';

import './GalleryDisplay.scss';

const GalleryDisplay = ({ children }: { children?: React.ReactNode }) => {
  return <div className="gallery-display">{children}</div>;
};

export default GalleryDisplay;
