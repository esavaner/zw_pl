import Filter from 'components/filter';
import { FilterType } from 'components/filter/Filter';
import GalleryDisplay from 'components/gallery-display';
import Gallery from 'components/gallery/Gallery';
import useDownloadImages from 'hooks/useDownlaodImages';
import { ART_TYPE } from 'models/image.model';
import FilterDisplay from 'components/filter-display';

const DrawingsPage = () => {
  const { list: images } = useDownloadImages(ART_TYPE.DRAWING);
  return (
    <GalleryDisplay>
      <FilterDisplay>
        <Filter
          filter={FilterType.YEAR}
          images={images}
          setOptions={() => null}
        />
        <Filter
          filter={FilterType.TECHNIQUE}
          images={images}
          setOptions={() => null}
        />
      </FilterDisplay>
      <Gallery images={images}></Gallery>
    </GalleryDisplay>
  );
};

export default DrawingsPage;
