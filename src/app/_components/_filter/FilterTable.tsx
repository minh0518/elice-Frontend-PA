import { FILTER_CATEGORY } from '@/config/const';
import styles from './FilterTable.module.scss';
import SingleCategory from '../_ui/SingleCategory';

const FilterTable = () => {
  return (
    <section className={styles.container}>
      {FILTER_CATEGORY.map((item, index) => {
        return (
          <div className={styles.SingleCategory_wrapper} key={index}>
            <SingleCategory categoryInfo={item} />
          </div>
        );
      })}
    </section>
  );
};

export default FilterTable;
