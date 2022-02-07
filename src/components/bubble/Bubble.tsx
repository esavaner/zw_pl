import React from 'react';

import './Bubble.scss';

interface BubbleProps {
    children?: React.ReactNode;
}

export default function Bubble(props: BubbleProps) {

    return (
        <div className='bubble'>
            { props.children }
        </div>
    );
}