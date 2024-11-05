'use client';

import { getQuery } from 'libs/query/src/query/query';

export const InnerComponent = () => {
  const { getSomething } = getQuery();
  const { data } = getSomething();

  console.log(data);

  return <div>{data.origin}</div>;
};
