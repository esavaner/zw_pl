import { sizes, techniques, years } from 'components/gallery/FilterOptions';
import { GalleryProps } from 'components/gallery/Gallery';
import {images} from 'resources/images';


export const paintingsGallery: GalleryProps = {
    header: 'PAINTINGS',
    images: images,
    filters: [years, techniques, sizes],
};

export const drawingsGallery: GalleryProps = {
    header: 'DRAWINGS',
    images: images,
    filters: [years, techniques, sizes],
};

export const digitalGallery: GalleryProps = {
    header: 'DIGITAL',
    images: images,
    filters: [years],
};