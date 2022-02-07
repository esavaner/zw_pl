import React from 'react';

import './Lightbox.scss';

interface LightboxProps {
    children?: React.ReactNode;
    close: () => void;
}

export default function Lightbox(props: LightboxProps) {
    return (
        <div className='lightbox'>
            <button className='close' onClick={props.close}>X</button>
            { props.children }
        </div>
    );
}