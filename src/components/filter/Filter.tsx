import { alterProp, Filter, FilterType } from 'models/filter.model';
import { Image } from 'models/image.model';
import React, { useContext, useEffect } from 'react';
import {
  TranslationContext,
  TranslationContextType,
} from 'translation/TranslationProvider';

import './Filter.scss';

interface FilterProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  images: Image[];
}

export default function FilterPane({ filter, images, setFilter }: FilterProps) {
  const { t } = useContext(TranslationContext) as TranslationContextType;

  const options = Array.from(
    new Set(images.map((image) => alterProp(image, filter)))
  ).sort((a, b) => b.localeCompare(a));

  const handleChange = (option: string) => {
    const newFilter = { ...filter };
    newFilter.active.includes(option)
      ? newFilter.active.splice(newFilter.active.indexOf(option), 1)
      : newFilter.active.push(option);

    setFilter(newFilter);
  };

  useEffect(() => {
    const newFilter = { ...filter };
    newFilter.values = options;
    setFilter(newFilter);
  }, [images]);

  return (
    <div className="filter">
      <span>{t(filter.type.toUpperCase())}</span>
      {options.map((option) => (
        <label
          key={option}
          className={filter.active.includes(option) ? 'selected' : ''}
          onClick={() => handleChange(option)}
        >
          {filter.type === FilterType.YEAR ? option : t(option.toUpperCase())}
        </label>
      ))}
    </div>
  );
}
