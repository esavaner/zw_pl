import { Image, ImageBaseFolder } from 'models/image.model';
import { useEffect, useState } from 'react';
import { ref as refDatabse, onValue, query, orderByChild, limitToFirst } from 'firebase/database';
import { database } from 'services/firebase';

const useDownloadLatest = (latestCount: number) => {
    const [latest, setlatest] = useState<Image[]>([]);

    useEffect(() => {
        const databaseRef = refDatabse(database, ImageBaseFolder);
        const unsub = onValue(query(databaseRef, orderByChild('date'), limitToFirst(latestCount)), (snapshot) => {
            const documents: Image[] = [];
            snapshot.forEach((child) => {
                documents.push(child.val());
            });
            setlatest(documents);
        });
        return () => unsub();
    }, [latestCount]);

    return { latest };
};

export default useDownloadLatest;