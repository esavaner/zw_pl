import React from 'react';

import './Column.scss';

interface ColumnProps {
    children?: React.ReactNode;
    fill?: boolean;
    hideOverflow?: boolean
}

export default function Column(props: ColumnProps) {
    let cls = 'column';
    if (props.fill) cls += ' fill';
    if (props.hideOverflow) cls += ' hideOverflow';

    return (
        <div className={cls}>
            {props.children}
        </div>
    );
}