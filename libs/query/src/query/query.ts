import { useQuery } from '@tanstack/react-query';
import { api } from '../api';

export const queryOptions = {
  queryKey: ['key'],
  queryFn: async () => {
    console.log('dupa');
    return await api.get('').then((r) => r.data);
  },
};

export const getQuery = () => {
  const getSomething = () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useQuery(queryOptions);

  return { getSomething };
};
