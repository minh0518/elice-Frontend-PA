import Results from './_components/_result/Results';
import FilterTable from './_components/_filter/FilterTable';
import SearchArea from './_components/_search/SearchArea';
import styles from './page.module.scss';
import { getFilterCondition } from './utils/filter';

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

  const res = await fetch(`http://localhost:3000/api/get/list?encodeUrl=${encodeUrl}`, {
    method: 'GET',
    cache: 'no-store',
  });

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <SearchArea />
        <FilterTable />
        <Results />
      </section>
    </main>
  );
}
