import React, { useEffect } from 'react';
import { Image } from 'resources/images';

import './ImagePane.scss';

interface ImageProps {
    children?: React.ReactNode;
    image: Image;
    width?: number;
    height?: number;
    select: any;
}


export default function ImagePane(props: ImageProps) {
    return (
        <img src={props.image.src} onClick={props.select}></img>
    );
}