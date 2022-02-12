import { sizes, techniques, years } from 'components/gallery/FilterOptions';
import { GalleryProps } from 'components/gallery/Gallery';
import {images} from 'resources/images';


export const paintingsGallery: GalleryProps = {
    header: 'Paintings',
    images: images,
    filters: [years, techniques, sizes],
};

export const drawingsGallery: GalleryProps = {
    header: 'Drawings',
    images: images,
    filters: [years, techniques, sizes],
};

export const digitalGallery: GalleryProps = {
    header: 'Digital',
    images: images,
    filters: [years],
};