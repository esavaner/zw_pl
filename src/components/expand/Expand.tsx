import React from 'react';

import './Expand.scss';

interface ExpandProps {
    children?: React.ReactNode;
    background?: string;
}

export default function Expand(props: ExpandProps) {
    return (
        <div className={`expand ${props.background}`}>
            { props.children }
        </div>
    );
}