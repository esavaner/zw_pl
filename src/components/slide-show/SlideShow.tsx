
import { AT, Context } from 'components/store/Store';
import React, { useContext} from 'react';
import loc from 'translation/translate';

import './SlideShow.scss';
import Carousel from 'components/carousel/Carousel';
import ImageBox from 'components/image-box/ImageBox';
import useDownloadLatest from 'hooks/useDownloadLatest';

export default function SlideShow() {
    const {dispatch} = useContext(Context);

    const {latest} = useDownloadLatest(5);
    return (
        <div className='slide-show'>
            <div className='latest'>{loc('LATEST')}</div>
            <Carousel autoplay>
                {latest.map((img, index) => <ImageBox key={img.src} image={img} onClick={() => dispatch({type: AT.LIGHTBOXOPEN, lightboxImages: latest, imageIndex: index})}/>)}
            </Carousel>
        </div>
    );
}