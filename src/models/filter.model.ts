import { Image } from './image.model';

export enum FilterType {
  YEAR = 'year',
  TECHNIQUE = 'tech',
}

export type Filter = {
  type: FilterType;
  values: string[];
  active: string[];
};

export const alterProp = (image: Image, filter: Filter) =>
  filter.type === FilterType.YEAR
    ? image.date.split('-')[0]
    : image[filter.type];

export const filterImages = (images: Image[], filters: Filter[]) =>
  images
    .filter((image) => {
      for (const filter of filters) {
        if (
          filter.active.length !== 0 &&
          !filter.active.includes(alterProp(image, filter))
        )
          return false;
      }
      return true;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
