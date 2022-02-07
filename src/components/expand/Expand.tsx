import React, { useState } from 'react';

import './Expand.scss';

interface ExpandProps {
    children?: React.ReactNode;
}

export default function Expand(props: ExpandProps) {
    const [active, setActive] = useState(false);

    return (
        <div className={`expand ${active ? 'active' : ''}`} onClick={() => setActive(true)}>
            <div className='visible'>
                <div className='content'>
                    { active && 
                        <button onClick={() => setActive(false)}>X</button>
                    }
                    { props.children }
                </div>
            </div>
        </div>
    );
}