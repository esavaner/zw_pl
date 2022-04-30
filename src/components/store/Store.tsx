import { Filter } from 'components/gallery/FilterOptions';
import React, { createContext, Dispatch, useReducer } from 'react';
import {images} from 'resources/images';
import {Image} from '../../models/image.model';
import { paintingsGallery, drawingsGallery, digitalGallery} from '../../models/gallery.model';

interface StoreProps {
    children?: React.ReactNode
}

export enum LANG {
    EN = 'en',
    PL = 'pl',
}

export enum AT {
    LIGHTBOXOPEN = 'lightboxo',
    LIGHTBOXCLOSE = 'lightboxc',
    HOME = 'home',
    PAINTINGS = 'paintings',
    DRAWINGS = 'drawings',
    DIGITAL = 'digital',
    LANG = 'lang',
}

export interface ActionOpen {
    type: AT.LIGHTBOXOPEN,
    images: Image[],
    imageIndex: number,
}

export interface ActionLang {
    type: AT.LANG,
    lang: string,
}

export interface Action {
    type: AT.HOME | AT.PAINTINGS | AT.DRAWINGS | AT.DIGITAL | AT.LIGHTBOXCLOSE,
}

export interface State {
    expand: AT,
    images: Image[],
    imageIndex: number,
    filters: Filter[],
    header: string,
    lightbox: boolean,
    lang: string,
}

const initial : State = {
    expand: AT.HOME,
    images: images,
    imageIndex: 0,
    header: 'Home',
    lightbox: false,
    lang: LANG.PL,
    filters: [],
};



const reducer = (state: State, action: Action | ActionOpen | ActionLang) => {
    const home = {
        expand: AT.HOME,
        header: 'Home',
        images: images,
    };

    switch (action.type) {
    case AT.HOME:
        return {...state,
            ...home
        };

    case AT.LIGHTBOXOPEN:
        return {...state,
            lightbox: true,
            images: action.images,
            imageIndex: action.imageIndex
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
    
    case AT.LANG:
        return {...state,
            lang: action.lang
        };

    default:
        return {...state,
            ...home
        };
    }
};

export const Context = createContext<{
    state: State, dispatch: Dispatch<Action | ActionOpen | ActionLang>
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