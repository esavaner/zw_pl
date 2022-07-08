import ImageBox from 'components/image-box/ImageBox';
import Lightbox from 'components/lightbox';
import React, { useState } from 'react';
import { Image } from '../../models/image.model';

import './Gallery.scss';

export interface GalleryProps {
  images: Image[];
}

export default function Gallery({ images }: GalleryProps) {
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const closeLightbox = () => {
    setLightboxVisible(false);
  };

  const openLightbox = (idx: number) => {
    setIndex(idx);
    setLightboxVisible(true);
  };
  return (
    <div className="gallery">
      <div className="images">
        {images.map((image, index) => (
          <ImageBox
            key={image.src}
            image={image}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>
      <Lightbox
        visible={lightboxVisible}
        onClose={closeLightbox}
        images={images}
        imageIndex={index}
      />
    </div>
  );
}
