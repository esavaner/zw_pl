import React from 'react';
import { Image } from 'models/image.model';

import './ImageBox.scss';

interface ImageBoxProps {
  image: Image;
  onClick?: () => void;
}

export default function ImageBox({ image, onClick }: ImageBoxProps) {
  return (
    <div className="img-tile">
      <div className="img-wrapper" onClick={onClick}>
        <img src={image.src} />
      </div>
      <span>{image.title}</span>
    </div>
  );
  // return <ImageAntd
  //     preview={{visible: false}}
  //     width={width || 200}
  //     src={image.src}
  //     {...props}
  // />;
}
