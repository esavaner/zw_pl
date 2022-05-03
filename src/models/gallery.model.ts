import { Filter, sizes, techniques, years } from 'components/gallery/FilterOptions';
import { ART_TYPE } from './image.model';

export type Gallery = {
    header: string;
    artType: ART_TYPE;
    filters: Filter[]
}

export const paintingsGallery: Gallery = {
    header: 'PAINTINGS',
    artType: ART_TYPE.PAINTING,
    filters: [years, techniques, sizes],
};

export const drawingsGallery: Gallery = {
    header: 'DRAWINGS',
    artType: ART_TYPE.DRAWING,
    filters: [years, techniques, sizes],
};

export const digitalGallery: Gallery= {
    header: 'DIGITAL',
    artType: ART_TYPE.DIGITAL,
    filters: [years],
};