import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {useState} from 'react';

export const useFirestore = () => {
  const [data, setData] = useState<FirebaseFirestoreTypes.DocumentData[]>([]);

  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>();

  const pendingVerificationDoctor = async () => {
    setLoading(true);
    try {
      const collection = await firestore()
        .collection('Users')
        .where('userType', '==', 'doctor')
        .where('verified', '==', false)
        .get();

      const newData = collection.docs.map(doc => ({...doc.data()}));
      setData(newData);
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
  };
  return {
    pendingVerificationDoctor,
    data,
    error,
    isLoading,
  };
};
