import React from 'react';

import './Expand.scss';

interface ExpandProps {
    children?: React.ReactNode;
    color?: string;
}

export default function Expand(props: ExpandProps) {
    return (
        <div className='expand' style={{background: props.color}}>
            { props.children }
        </div>
    );
}