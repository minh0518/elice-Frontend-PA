import { FILTER_CATEGORY } from '@/config/const';
import styles from './FilterTable.module.scss';
import SingleCategory from '../_ui/SingleCategory';

const FilterTable = () => {
  return (
    <section className={styles.container}>
      {FILTER_CATEGORY.map((item) => {
        return (
          <div className={styles.SingleCategory_wrapper} key={item.query}>
            <SingleCategory categoryInfo={item} />
          </div>
        );
      })}
    </section>
  );
};

export default FilterTable;
