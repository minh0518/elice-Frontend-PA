'use client';
import { useState } from 'react';
import styles from './SearchArea.module.scss';
import { IoSearch } from 'react-icons/io5';

const SearchArea = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <i className={styles.searchIcon}>
          <IoSearch />
        </i>

        {/* TODO :  문자열을 입력할 때마다 300ms debounced search  */}
        <input
          className={styles.searchInput}
          placeholder="배우고 싶은 언어, 기술을 검색해 보세요."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </section>
  );
};

export default SearchArea;
