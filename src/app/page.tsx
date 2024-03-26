import Results from './_components/_result/Results';
import FilterTable from './_components/_filter/FilterTable';
import SearchArea from './_components/_search/SearchArea';
import styles from './page.module.scss';
import { getFilterCondition } from './_utils/filter';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { generateQueryKey } from './_utils/generateQueryKey';
import RQProvider from './_components/RQProvider';

export type FilterProps = {
  searchParams: {
    courseType?: string;
    format?: string;
    category?: string;
    level?: string;
    programmingLanguage?: string;
    price?: string;
  };
};
export default async function Home({ searchParams }: FilterProps) {
  const filterConditions = getFilterCondition({ searchParams });
  const encodeUrl = encodeURIComponent(JSON.stringify(filterConditions));

  const mappedKey = JSON.stringify(generateQueryKey({ searchParams }));
  const queryClient = new QueryClient();
  await queryClient.fetchQuery({
    queryKey: ['selected', mappedKey],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/get/list?encodeUrl=${encodeUrl}`, {
        method: 'GET',
        cache: 'no-store',
      });
      return await response.json();
    },
  });
  const dehydratedState = dehydrate(queryClient);
  // const res = await fetch(`http://localhost:3000/api/get/list?encodeUrl=${encodeUrl}`, {
  //   method: 'GET',
  //   cache: 'no-store',
  // });

  return (
    <RQProvider>
      <main className={styles.container}>
        <section className={styles.content}>
          <SearchArea />
          <FilterTable />
          <HydrationBoundary state={dehydratedState}>
            <Results mappedKey={mappedKey} encodeUrl={encodeUrl} />
          </HydrationBoundary>
        </section>
      </main>
    </RQProvider>
  );
}
