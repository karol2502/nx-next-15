import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getQuery, queryOptions } from 'libs/query/src/query/query';
import { AxiosError } from 'axios';
import { notFound } from 'next/navigation';
import { InnerComponent } from './inner-component';

export const Component = async () => {
  const queryClient = new QueryClient();
  try {
    await queryClient.fetchQuery(queryOptions);
  } catch (error) {
    console.error((error as AxiosError).message);
    notFound();
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <InnerComponent />
    </HydrationBoundary>
  );
};
