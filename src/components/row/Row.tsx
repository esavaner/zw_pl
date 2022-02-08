import React from 'react';

import './Row.scss';

interface RowProps {
    children?: React.ReactNode;
    fill?: boolean;
    hideOverflow?: boolean
}

export default function Row(props: RowProps) {
    let cls = 'row';
    if (props.fill) cls += ' fill';
    if (props.hideOverflow) cls += ' hideOverflow';
    
    return (
        <div className={cls}>
            {props.children}
        </div>
    );
}