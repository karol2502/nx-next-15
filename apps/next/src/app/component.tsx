import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { notFound } from 'next/navigation';
import { InnerComponent } from './inner-component';
import { QueryOptions } from 'libs/query/src/query/query';

export const Component = async () => {
  const queryClient = new QueryClient();
  try {
    await queryClient.fetchQuery(QueryOptions.getSomething());
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
