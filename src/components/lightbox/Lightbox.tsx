import { AT, Context } from 'components/store/Store';
import React, { useContext } from 'react';
import { Image } from 'models/image.model';
import {Image as ImageAntd} from 'antd';

import './Lightbox.scss';

export interface LightboxProps {
    images: Image[];
}

export default function Lightbox(props: LightboxProps) {
    const {state, dispatch} = useContext(Context);
    return (
        <ImageAntd.PreviewGroup preview={{visible: state.lightbox, current: state.imageIndex, onVisibleChange: () => dispatch({type: AT.LIGHTBOXCLOSE})}}>
            {props.images.map((image) => <ImageAntd key={image.src} src={image.src}/>)}
        </ImageAntd.PreviewGroup>
    );
}