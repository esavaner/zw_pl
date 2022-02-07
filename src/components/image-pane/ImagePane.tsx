import React from 'react';
import { Image } from 'resources/images';

import './ImagePane.scss';

interface ImageProps {
    children?: React.ReactNode;
    image: Image;
    width: number;
    height: number;
    select: any;
}


export default function ImagePane(props: ImageProps) {
    return (
        <div className='image-pane' style={{width: props.width + 'px', height: props.height + 'px'}}>
            <img src={props.image.src} onClick={props.select}></img>
        </div>
    );
}