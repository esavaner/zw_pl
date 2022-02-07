import FilterPane from 'components/filter-pane/FilterPane';
import React, { useReducer, useState } from 'react';
import { emptyImage, Image } from 'resources/images';
import { Filter, FilterType } from './FilterOptions';
import Cycle, { reduceCycle, CycleState, CActionType } from 'components/cycle/Cycle';

import './Gallery.scss';
import ImagePane from 'components/image-pane/ImagePane';
import Lightbox from 'components/lightbox/Lightbox';

export interface GalleryProps {
    children?: React.ReactNode;
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
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const selectImage = (index: number) => {
        setIndex(index);
        setOpen(true);
    };

    const alterProp = (image: Image, filterType: FilterType) => {
        if (filterType === FilterType.YEAR) {
            return image[filterType];
        } else {
            return image[filterType];
        }
    };

    const filterImages = (images: Image[]) => {
        return images
            .filter(image => {
                if (stateFilter.filters) {
                    for (const filter of stateFilter.filters) {
                        if (filter.active.length !== 0 && (!image[filter.type as FilterType] || !filter.active.includes(alterProp(image, filter.type as FilterType))))
                            return false;
                    }
                }
                return true;
            })
            .map((image, index) => 
                <div className='image-tile' key={'image' + index}>
                    <ImagePane width={200} height={200} image={image} select={() =>selectImage(index)}></ImagePane>
                    <span className='image-title'>{image.title}</span>
                </div>
            );
    };


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

    const largeProps = {
        images: props.images,
        imageInedx: index,
        height: 850,
        width: 850,
        dark: false,
        timer: false,
        click: () => 'a',
    };

    return (
        <div className='gallery'>
            <div className='filters'>
                { filters }
            </div>
            <div className='images'>
                { filterImages(props.images) }
            </div>
            { open && 
                <Lightbox close={() => setOpen(false)}>
                    <Cycle {...largeProps}></Cycle>
                </Lightbox>
            }
        </div>
    );
}