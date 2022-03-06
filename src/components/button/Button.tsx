import React from 'react';

import './Button.scss';

interface ButtonProps {
    children?: React.ReactNode;
    click?: () => void,
    className?: string,
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`btn ${props.className}`} onClick={props.click}>
            {props.children}
        </button>
    );
}