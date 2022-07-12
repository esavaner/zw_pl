import React, { useContext, useState } from 'react';
import { Image } from 'models/image.model';
import { Image as ImageAntd } from 'antd';
import { FiChevronRight, FiChevronLeft, FiX } from 'react-icons/fi';

import './Lightbox.scss';

export interface LightboxProps {
  images: Image[];
  imageIndex?: number;
  visible: boolean;
  onClose: () => void;
}

export default function Lightbox({
  images,
  visible = false,
  onClose,
  imageIndex = 0,
}: LightboxProps) {
  if (!visible) return null;
  const [selectedIndex, setSelectedIndex] = useState(imageIndex);

  const next = () => {
    setSelectedIndex((idx) => idx + 1);
  };

  const prev = () => {
    setSelectedIndex((idx) => idx - 1);
  };

  const selected = images[selectedIndex];

  const description = [
    selected.title,
    selected.tech,
    selected.size,
    selected.date,
  ]
    .filter((el) => !!el)
    .join(', ');

  return (
    <div className="lightbox">
      <div className="lightbox-display">
        <button onClick={prev}>
          <FiChevronLeft />
        </button>
        <div className="img-wrap">
          <img src={selected.src} />
        </div>
        <div className="lightbox-right">
          <button onClick={next}>
            <FiChevronRight />
          </button>
          <button className="lightbox-close" onClick={onClose}>
            <FiX />
          </button>
        </div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}
