import axios, {Canceler} from 'axios';
import {useEffect, useState} from 'react';
import {DataTypes} from './types';

export const useGetUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<DataTypes[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    let cancel: Canceler;
    axios({
      method: 'GET',
      url: 'http://localhost:3000/db.json',
      cancelToken: new axios.CancelToken((token) => (cancel = token)),
    })
      .then((res) => {
        setData(res.data.users);
        setIsLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, []);
  return {isLoading, data, error};
};
