import Results from './_components/_result/Results';
import FilterTable from './_components/_filter/FilterTable';
import SearchArea from './_components/_search/SearchArea';
import styles from './page.module.scss';
import { getFilterCondition } from './_utils/filter';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { generateQueryKey } from './_utils/generateQueryKey';
import RQProvider from './_components/RQProvider';
import { PAGE_CONTENT_LENGTH, START_OFFSET } from '@/config/const';
import { filteredDataApi } from '@/service/service';

export type FilterProps = {
  searchParams: {
    courseType?: string | string[];
    format?: string | string[];
    category?: string | string[];
    level?: string | string[];
    programmingLanguage?: string | string[];
    price?: string | string[];
    keyword?: string;
  };
};
export default async function Home({ searchParams }: FilterProps) {
  const filterConditions = getFilterCondition({ searchParams });
  const encodeUrl = encodeURIComponent(JSON.stringify(filterConditions));

  const mappedKey = JSON.stringify(generateQueryKey({ searchParams }));
  const searchWord = searchParams.keyword;

  const queryClient = new QueryClient();
  await queryClient.fetchQuery({
    queryKey: ['selected', searchWord || null, mappedKey, START_OFFSET, PAGE_CONTENT_LENGTH],
    queryFn: async () => {
      return await filteredDataApi.getFilteredData(encodeUrl, START_OFFSET, PAGE_CONTENT_LENGTH);
    },
  });
  const dehydratedState = dehydrate(queryClient);

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
