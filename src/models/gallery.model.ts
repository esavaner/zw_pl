import { Filter, sizes, techniques, years } from 'components/gallery/FilterOptions';
import { images } from 'resources/images';
import { ART_TYPE, Image } from './image.model';

export type Gallery = {
    header: string;
    artType: ART_TYPE;
    filters: Filter[]
    images: Image[]
}

export const paintingsGallery: Gallery = {
    header: 'PAINTINGS',
    artType: ART_TYPE.PAINTING,
    filters: [years, techniques, sizes],
    images: images,
};

export const drawingsGallery: Gallery = {
    header: 'DRAWINGS',
    artType: ART_TYPE.PAINTING,
    filters: [years, techniques, sizes],
    images: images,
};

export const digitalGallery: Gallery= {
    header: 'DIGITAL',
    artType: ART_TYPE.PAINTING,
    filters: [years],
    images: images,
};