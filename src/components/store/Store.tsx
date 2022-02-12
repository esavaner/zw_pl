import { CycleProps } from 'components/cycle/Cycle';
import { Filter } from 'components/gallery/FilterOptions';
import React, { createContext, Dispatch, useReducer } from 'react';
import {Image, images} from 'resources/images';
import { paintingsGallery, drawingsGallery, digitalGallery } from './Const';

interface StoreProps {
    children?: React.ReactNode
}

export enum AT {
    LIGHTBOXOPEN = 'lightboxo',
    LIGHTBOXCLOSE = 'lightboxc',
    HOME = 'home',
    PAINTINGS = 'paintings',
    DRAWINGS = 'drawings',
    DIGITAL = 'digital',
}

export interface ActionOpen {
    type: AT.LIGHTBOXOPEN,
    cycleProps: CycleProps,
}

export interface Action {
    type: AT.HOME | AT.PAINTINGS | AT.DRAWINGS | AT.DIGITAL | AT.LIGHTBOXCLOSE,
}

export interface State {
    expand: AT,
    images: Image[],
    filters: Filter[],
    header: string,
    cycleProps: CycleProps,
    lightbox: boolean,
}

const initial : State = {
    expand: AT.HOME,
    images: images,
    header: 'Home',
    lightbox: false,
    filters: [],
    cycleProps: {
        images: images,
        imageInedx: 0,
        dark: false,
        timer: false,
        click: () => null,
    }
};



const reducer = (state: State, action: Action | ActionOpen) => {
    switch (action.type) {
    case AT.HOME:
        return initial;

    case AT.LIGHTBOXOPEN:
        return {...state,
            lightbox: true,
            cycleProps: action.cycleProps
        };

    case AT.LIGHTBOXCLOSE:
        return {...state,
            lightbox: false,
        };

    case AT.PAINTINGS:
        return {...state,
            ...paintingsGallery,
            expand: AT.PAINTINGS,
        };
        

    case AT.DRAWINGS:
        return {...state,
            ...drawingsGallery,
            expand: AT.DRAWINGS
        };
        

    case AT.DIGITAL:
        return {...state,
            ...digitalGallery,
            expand: AT.DIGITAL
        }; 

    default:
        return initial;
    }
};

export const Context = createContext<{
    state: State, dispatch: Dispatch<Action | ActionOpen>
}>({
    state: initial, dispatch: () => null
});

export default function Store(props: StoreProps) {
    const [state, dispatch] = useReducer(reducer, initial);
    return (
        <Context.Provider value={{state, dispatch}}>
            {props.children}
        </Context.Provider>
    );
}