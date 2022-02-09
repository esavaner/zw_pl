import React from 'react';

import './Button.scss';

interface ButtonProps {
    children?: React.ReactNode;
    click?: () => void
}

export default function Button(props: ButtonProps) {
    return (
        <button className='btn' onClick={props.click}>
            {props.children}
        </button>
    );
}