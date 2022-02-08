import React from 'react';

import './Lightbox.scss';

interface LightboxProps {
    children?: React.ReactNode;
    close: () => void;
}

export default function Lightbox(props: LightboxProps) {
    return (
        <div className='lightbox'>
            <div className='top-pane'>
                <button className='close' onClick={props.close}>
                    <i className='gg-arrow-left'></i>
                </button>
                <span>back</span>
            </div>
            { props.children }
        </div>
    );
}