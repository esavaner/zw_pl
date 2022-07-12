export enum ART_TYPE {
  PAINTING = 'PAINTING',
  DRAWING = 'DRAWING',
  DIGITAL = 'DIGITAL',
  OTHER = 'OTHER',
}

export type Image = {
  src: string;
  title: string;
  date: string;
  size?: string;
  tech: string;
  artType: ART_TYPE;
};

export const ImageBaseFolder = 'IMAGES';
