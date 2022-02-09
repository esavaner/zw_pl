import React, { useEffect } from 'react';
import { Image } from 'resources/images';

import './ImagePane.scss';

interface ImageProps {
    children?: React.ReactNode;
    image: Image;
    width?: number;
    height?: number;
    select: any;
    hover?: boolean;
}


export default function ImagePane(props: ImageProps) {
    return (
        <div className='img-box'>
            <img className={props.hover? 'hover-on' : ''} src={props.image.src} onClick={props.select}></img>
        </div>
    );
}