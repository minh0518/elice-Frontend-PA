import Results from './_components/_result/Results';
import FilterTable from './_components/_filter/FilterTable';
import SearchArea from './_components/_search/SearchArea';
import styles from './page.module.scss';
export default function Home() {
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
