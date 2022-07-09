import { Image } from 'models/image.model';
import React, { useContext, useState } from 'react';
import {
  TranslationContext,
  TranslationContextType,
} from 'translation/TranslationProvider';

import './Filter.scss';

export enum FilterType {
  YEAR = 'year',
  TECHNIQUE = 'tech',
}

interface FilterProps<T> {
  filter: FilterType;
  setOptions: any;
  images: Image[];
}

export default function FilterPane<T>({
  filter,
  images,
  setOptions,
}: FilterProps<T>) {
  const { t } = useContext(TranslationContext) as TranslationContextType;
  const alterProp = (image: Image, filterType: FilterType) =>
    filterType === FilterType.YEAR
      ? image.date.split('-')[0]
      : image[filterType];

  const options = Array.from(
    new Set(images.map((image) => alterProp(image, filter)))
  ).sort((a, b) => a.localeCompare(b));

  const [tab, setTab] = useState(
    Object.fromEntries(options.map((option) => [option, false]))
  );
  const handleChange = (option: string | number) => {
    const newTab = { ...tab };
    newTab[option] = !newTab[option];
    setTab(newTab);
    setOptions(newTab);
  };

  return (
    <div className="filter">
      <span>{t(filter.toUpperCase())}</span>
      {options.map((option) => (
        <label
          key={option}
          className={tab[option] ? 'selected' : ''}
          onClick={() => handleChange(option)}
        >
          {option}
        </label>
      ))}
    </div>
  );
}
