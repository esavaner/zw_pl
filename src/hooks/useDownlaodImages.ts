import { ART_TYPE, Image, ImageBaseFolder } from 'models/image.model';
import { useEffect, useState } from 'react';
import {
  ref as refDatabse,
  onValue,
  query,
  orderByChild,
  equalTo,
} from 'firebase/database';
import { database } from 'services/firebase';

const useDownloadImages = (artType: ART_TYPE) => {
  const [list, setList] = useState<Image[]>([]);

  useEffect(() => {
    const databaseRef = refDatabse(database, ImageBaseFolder);
    const unsub = onValue(
      query(databaseRef, orderByChild('artType'), equalTo(artType)),
      (snapshot) => {
        const documents: Image[] = [];
        snapshot.forEach((child) => {
          documents.push(child.val());
        });
        setList(documents.sort((a, b) => a.date.localeCompare(b.date)));
      }
    );
    return () => unsub();
  }, [artType]);

  return { list };
};

export default useDownloadImages;
