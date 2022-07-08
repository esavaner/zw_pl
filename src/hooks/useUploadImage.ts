import { FormState } from 'components/upload/Upload';
import {
  getDownloadURL,
  ref as refStorage,
  StorageError,
  uploadBytesResumable,
} from 'firebase/storage';
import { ref as refDatabse, set, push } from 'firebase/database';
import { ART_TYPE, ImageBaseFolder } from 'models/image.model';
import { useEffect, useState } from 'react';
import { storage, database } from 'services/firebase';

const useUploadImage = (form: FormState) => {
  const [imgSent, setImgSent] = useState(false);
  const [dataSent, setDataSent] = useState(false);
  const [imgError, setImgError] = useState<StorageError>();
  const [dataError, setDataError] = useState();
  const folder = form.artType || ART_TYPE.OTHER;

  useEffect(() => {
    const storageRef = refStorage(storage, `${folder}/${form.file.name}`);
    // `${folder}/${form.title}`
    const databaseRef = refDatabse(database, ImageBaseFolder);

    uploadBytesResumable(storageRef, form.file).on(
      'state_changed',
      (snap) => {
        console.log(snap);
      },
      (error) => setImgError(error),
      async () => {
        setImgSent(true);
        const url = await getDownloadURL(storageRef);
        set(push(databaseRef), {
          ...form,
          src: url,
        })
          .then(() => setDataSent(true))
          .catch((error) => setDataError(error));
      }
    );
  }, [form]);

  return { imgSent, dataSent, imgError, dataError };
};

export default useUploadImage;
