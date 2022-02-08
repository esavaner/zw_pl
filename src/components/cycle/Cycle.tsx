import React, { useEffect, useReducer } from 'react';
import { CSSTransition } from 'react-transition-group';
import ImagePane from 'components/image-pane/ImagePane';
import { Image } from 'resources/images';

import './Cycle.scss';

export enum CActionType {
    NEXT = 'next',
    PREV = 'prev',
    SELECT = 'select',
    TIMER = 'timer',
}

export interface CycleAction {
    type: CActionType.NEXT | CActionType.PREV | CActionType.TIMER | CActionType.SELECT,
}

export interface CycleState {
    selected: Image,
    time: number,
    imageIndex: number,
}


export function reduceCycle(images: Image[]) {
    return (state: CycleState, action: CycleAction) => {
        const im = images;
        const i = state.imageIndex;
        switch(action.type) {
        case CActionType.NEXT:
            return i + 2 > images.length
                ? {...state, imageIndex: 0, selected: im[0], time: 100}
                : {...state, imageIndex: i + 1, selected: im[i + 1], time: 100};

        case CActionType.PREV:
            return (0 > i - 1)
                ? {...state, imageIndex: im.length - 1, selected: im[im.length - 1], time: 100}
                : {...state, imageIndex: i - 1, selected: im[i - 1], time: 100};

        case CActionType.TIMER:
            if (state.time > 0) {
                return {...state, time: state.time - 1};
            } else {
                return i + 2 > images.length
                    ? {...state, imageIndex: 0, selected: im[0], time: 100}
                    : {...state, imageIndex: i + 1, selected: im[i + 1], time: 100};
            }
           
        case CActionType.SELECT:
            return {...state};


        default:
            return state;
        }
    };
}


interface CycleProps {
    dark: boolean;
    images: Image[];
    imageInedx: number;
    timer: boolean;
    width: number;
    height: number;
    click: (index: number) => void
}

export default function Cycle(props: CycleProps) {
    const initial: CycleState = {selected: props.images[props.imageInedx], time: 100, imageIndex: props.imageInedx};
    const [state, dispatch] = useReducer(reduceCycle(props.images), initial);
    let t: NodeJS.Timer;

    
    useEffect(() => {
        if (props.timer)
            t = setInterval(() => dispatch({type: CActionType.TIMER}), 30);
        return () =>  {
            clearInterval(t);
        };
    }, []);

    const selectImage = () => {
        return props.click(state.imageIndex);
    };

    return (
        <div className='cycle'>
            <div className={`cycle-pane ${props.dark ? 'dark' : ''}`}>
                <button className='prev' onClick={() => dispatch({type: CActionType.PREV})}>
                    <i className='gg-chevron-left'></i>
                </button>
                <CSSTransition
                    in={true}
                    key={state.selected.src}
                    classNames='img-slide'
                    timeout={{enter: 1000, exit: 1000}}
                >   
                    <ImagePane image={state.selected} select={selectImage}></ImagePane>
                    
                </CSSTransition>
                <button className='next' onClick={() => dispatch({type: CActionType.NEXT})}>
                    <i className='gg-chevron-right'></i>
                </button>
            </div>
            { props.timer && 
                <div className='out-timer'>
                    <div className='in-timer' style={{width: `${state.time}%`}}></div>
                </div>
            }
        </div>
    );
}