import FilterHTML from 'components/filter';
import GalleryDisplay from 'components/gallery-display';
import Gallery from 'components/gallery/Gallery';
import useDownloadImages from 'hooks/useDownlaodImages';
import { ART_TYPE } from 'models/image.model';
import FilterDisplay from 'components/filter-display';
import { useState } from 'react';
import { Filter, filterImages, FilterType } from 'models/filter.model';

const DrawingsPage = () => {
  const { list: images } = useDownloadImages(ART_TYPE.DRAWING);
  const [yearFilter, setYearFilter] = useState<Filter>({
    type: FilterType.YEAR,
    values: [],
    active: [],
  });
  const [techFilter, setTechFilter] = useState<Filter>({
    type: FilterType.TECHNIQUE,
    values: [],
    active: [],
  });
  const filters = [yearFilter, techFilter];

  const filteredImages = filterImages(images, filters);
  return (
    <GalleryDisplay>
      <FilterDisplay>
        <FilterHTML
          filter={yearFilter}
          images={images}
          setFilter={setYearFilter}
        />
        <FilterHTML
          filter={techFilter}
          images={images}
          setFilter={setTechFilter}
        />
      </FilterDisplay>
      <Gallery images={filteredImages}></Gallery>
    </GalleryDisplay>
  );
};

export default DrawingsPage;
