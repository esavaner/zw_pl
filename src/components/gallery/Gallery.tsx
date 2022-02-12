import FilterPane from 'components/filter-pane/FilterPane';
import React, { useContext, useReducer } from 'react';
import { Image } from 'resources/images';
import { Filter, FilterType } from './FilterOptions';

import './Gallery.scss';
import { AT, Context } from 'components/store/Store';

export interface GalleryProps {
    children?: React.ReactNode;
    header: string;
    images: Image[];
    filters?: Filter[];
}

enum ActionType {
    FILTER = 'filter',
}

interface FilterAction {
    type: ActionType.FILTER,
    filterIndex: number,
    filter: Filter,
}

interface FilterState {
    filterIndex: number,
    filters: Filter[] | undefined,
}


export default function Gallery(props: GalleryProps) {
    const initialFilter : FilterState = {filterIndex: 0, filters: props.filters};
    const reducer = (state: FilterState, action: FilterAction) => {
        if (!props.filters) return state;
        props.filters[action.filterIndex] = action.filter;
        return {...state, filters: props.filters};
    };

    const [stateFilter, dispatchFilter] = useReducer(reducer, initialFilter);
    const {dispatch} = useContext(Context);

    const selectImage = (index: number) => {
        const cycleProps  = {
            images: filterImages,
            imageInedx: index,
            dark: false,
            timer: false,
            click: () => null,
        };
        dispatch({type: AT.LIGHTBOXOPEN, cycleProps: cycleProps});
    };

    const alterProp = (image: Image, filterType: FilterType) => {
        if (filterType === FilterType.YEAR) {
            return image[filterType];
        } else {
            return image[filterType];
        }
    };

    const filterImages = props.images.filter(image => {
        if (stateFilter.filters) {
            for (const filter of stateFilter.filters) {
                if (filter.active.length !== 0 && (!image[filter.type as FilterType] || !filter.active.includes(alterProp(image, filter.type as FilterType))))
                    return false;
            }
        }
        return true;
    });

    const filteredImages = filterImages.map((image, index) => 
        <div className='image-tile' key={'image' + index}>
            <div className='img-box'>
                <img src={image.src} onClick={() =>selectImage(index)}></img>
            </div>
            <div className='image-title'>{image.title}</div>
        </div>
    );


    const setFilter = (filter: Filter, filterIndex: number) => {
        dispatchFilter({type: ActionType.FILTER, filter: filter, filterIndex: filterIndex});
    };

    const filters = props.filters?.map((filter, index) =>
        <div className='filter' key={`filter-${index}`}>
            <FilterPane
                filter={filter}
                filterIndex={index}
                setOptions={setFilter}
            />
        </div>
    );

    return (
        <div className='gallery'>
            <h1>{props.header}</h1>
            <div className='filters'>
                { filters }
            </div>
            <div className='scrollable'>
                <div className='images'>
                    { filteredImages }
                </div>
            </div>
        </div>
    );
}