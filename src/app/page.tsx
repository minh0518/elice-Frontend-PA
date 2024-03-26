import Results from './_components/_result/Results';
import FilterTable from './_components/_filter/FilterTable';
import SearchArea from './_components/_search/SearchArea';
import styles from './page.module.scss';
import { getFilterCondition } from './_utils/filter';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { generateQueryKey } from './_utils/generateQueryKey';
import RQProvider from './_components/RQProvider';
import { OrgCourseListResponse } from '@/types/const';
import { v4 as uuidv4 } from 'uuid';

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
      const jsonData: OrgCourseListResponse = await response.json();
      const coursesWithId = jsonData.courses.map((course) => ({
        ...course,
        id: uuidv4(),
      }));

      return {
        ...jsonData,
        courses: coursesWithId,
      };
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
