
import { AT, Context } from 'components/store/Store';
import React, { useContext} from 'react';
import { Image } from 'resources/images';
import Cycle, { CycleProps } from '../cycle/Cycle';
import loc from 'components/lang/translate';

import './SlideShow.scss';

interface SlideShowProps {
    images: Image[];
}

export default function SlideShow(props: SlideShowProps) {
    const {dispatch} = useContext(Context);

    const selectImage = (index: number) => {
        const cycleProps: CycleProps  = {
            images: props.images,
            imageInedx: index,
            dark: false,
            timer: false,
            click: () => null
        };
        dispatch({type: AT.LIGHTBOXOPEN, cycleProps: cycleProps});
    };

    const smallProps = {
        images: props.images,
        imageInedx: 0,
        dark: false,
        timer: true,
        click: selectImage,
    };

    return (
        <div className='slide-show'>
            <span className='latest'>{loc('LATEST')}</span>
            <Cycle {...smallProps}></Cycle>
        </div>
    );
}