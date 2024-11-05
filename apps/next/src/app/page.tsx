import { TanstackQueryProvider } from 'libs/context/src/context/query-provider';
import { Component } from './component';

export default async function Home() {
  return (
    <TanstackQueryProvider>
      <Component />
    </TanstackQueryProvider>
  );
}
