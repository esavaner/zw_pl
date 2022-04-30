import React from 'react';
import { Carousel as CarouselAntd } from 'antd';

interface CarouselProps { 
    autoplay?: boolean
    children?: React.ReactNode
}

export default function Carousel({autoplay, children}: CarouselProps) {
    return (
        <div>
            {/* <button className='prev' onClick={() => '{}'}>
                <i className='gg-chevron-left'></i>
            </button> */}
            <CarouselAntd autoplay={autoplay}>
                {children}
            </CarouselAntd>
            {/* <button className='prev' onClick={() => '{}'}>
                <i className='gg-chevron-left'></i>
            </button> */}
        </div>
    );
}