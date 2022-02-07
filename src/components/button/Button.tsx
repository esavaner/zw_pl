import React from 'react';

import './Button.scss';

interface ButtonProps {
    iconType?: string,
    children?: React.ReactNode,
}

function getIcon(iconType: string) {
    switch(iconType) {
    case 'home':
        return <i className='gg-home'></i>;
    default:
        return '';
    }
}

export default function Button(props: ButtonProps) {
    return (
        <button>{getIcon(props.iconType || '')}
            {props.children}
        </button>
    );
}