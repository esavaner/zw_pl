import { AT, Context } from 'components/store/Store';
import React, { useContext } from 'react';

import './Lightbox.scss';

export interface LightboxProps {
    children?: React.ReactNode;
}

export default function Lightbox(props: LightboxProps) {
    const {dispatch} = useContext(Context);
    return (
        <div className='lightbox'>
            <div className='top-pane'>
                <button className='close' onClick={() => dispatch({type: AT.LIGHTBOXCLOSE})}>
                    <i className='gg-arrow-left'></i>
                </button>
                <span>back</span>
            </div>
            { props.children }
        </div>
    );
}