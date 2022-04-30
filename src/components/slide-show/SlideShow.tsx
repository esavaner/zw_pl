
import { AT, Context } from 'components/store/Store';
import React, { useContext} from 'react';
import { Image } from '../../models/image.model';
import loc from 'translation/translate';

import './SlideShow.scss';
import Carousel from 'components/carousel/Carousel';
import ImageBox from 'components/image-box/ImageBox';

interface SlideShowProps {
    images: Image[];
}

export default function SlideShow(props: SlideShowProps) {
    const {dispatch} = useContext(Context);

    return (
        <div className='slide-show'>
            <div className='latest'>{loc('LATEST')}</div>
            <Carousel autoplay>
                {props.images.map((img, index) => <ImageBox key={img.src} image={img} onClick={() => dispatch({type: AT.LIGHTBOXOPEN, images: props.images, imageIndex: index})}/>)}
            </Carousel>
        </div>
    );
}