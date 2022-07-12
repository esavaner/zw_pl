import FilterHTML from 'components/filter';
import GalleryDisplay from 'components/gallery-display';
import Gallery from 'components/gallery/Gallery';
import useDownloadImages from 'hooks/useDownlaodImages';
import { ART_TYPE } from 'models/image.model';
import FilterDisplay from 'components/filter-display';
import { useState } from 'react';
import { Filter, filterImages, FilterType } from 'models/filter.model';

const DigitalPage = () => {
  const { list: images } = useDownloadImages(ART_TYPE.DIGITAL);
  const [yearFilter, setYearFilter] = useState<Filter>({
    type: FilterType.YEAR,
    values: [],
    active: [],
  });
  const filters = [yearFilter];

  const filteredImages = filterImages(images, filters);
  return (
    <GalleryDisplay>
      <FilterDisplay>
        <FilterHTML
          filter={yearFilter}
          images={images}
          setFilter={setYearFilter}
        />
      </FilterDisplay>
      <Gallery images={filteredImages}></Gallery>
    </GalleryDisplay>
  );
};

export default DigitalPage;
