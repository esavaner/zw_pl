import React from 'react';
import { Image as ImageAntd, ImageProps } from 'antd';
import { Image } from 'models/image.model';

interface ImageBoxProps extends ImageProps {
    image: Image;
    width?: number;
}

export default function ImageBox({image, width, ...props}: ImageBoxProps) {
    return <ImageAntd
        preview={{visible: false}}
        width={width || 200}
        src={image.src}
        {...props}
    />;
}