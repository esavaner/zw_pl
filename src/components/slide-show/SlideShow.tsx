
import Lightbox from 'components/lightbox/Lightbox';
import React, { useState } from 'react';
import { Image } from 'resources/images';
import Cycle from '../cycle/Cycle';

import './SlideShow.scss';

interface SlideShowProps {
    images: Image[];
}

export default function SlideShow(props: SlideShowProps) {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const selectImage = (index: number) => {
        setIndex(index);
        setOpen(true);
    };

    const smallProps = {
        images: props.images,
        imageInedx: 0,
        height: 200,
        width: 200,
        dark: true,
        timer: true,
        click: selectImage,
    };

    const largeProps = {
        images: props.images,
        imageInedx: index,
        height: 850,
        width: 850,
        dark: false,
        timer: false,
        click: () => 'a',
    };

    return (
        <div className='slide-show'>
            <span className='latest'>Latest</span>
            <Cycle {...smallProps}></Cycle>
            { open && 
                <Lightbox close={() => setOpen(false)}>
                    <Cycle {...largeProps}></Cycle>
                </Lightbox>
            }
        </div>
    );
}