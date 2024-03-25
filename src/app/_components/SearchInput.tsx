import styles from './SearchInput.module.scss';
import { IoSearch } from 'react-icons/io5';

const SearchInput = () => {
  return (
    <div className={styles.container}>
      <i className={styles.searchIcon}>
        <IoSearch />
      </i>

      {/* TODO :  문자열을 입력할 때마다 300ms debounced search  */}
      <input className={styles.searchInput} placeholder="배우고 싶은 언어, 기술을 검색해 보세요." />
    </div>
  );
};

export default SearchInput;
