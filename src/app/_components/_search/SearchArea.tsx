'use client';
import { useEffect, useState } from 'react';
import styles from './SearchArea.module.scss';
import { IoSearch } from 'react-icons/io5';
import useDebounce from '@/app/_hooks/useDebounce';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchArea = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchText = useDebounce(searchValue, 300);

  useEffect(() => {
    (function updateQuery() {
      if (debouncedSearchText !== '') {
        // 존재하는 쿼리스트링이 없을 때
        if (!searchParams.toString()) {
          const url = `?keyword=${debouncedSearchText}`;
          router.push(url);
        }

        // 존재하는 쿼리스트링이 있을 때
        if (searchParams.toString()) {
          // keyword 쿼리스트링이 있을 때
          if (searchParams.get(`keyword`)) {
            newSearchParams.set('keyword', debouncedSearchText);
            const url = `?${newSearchParams.toString()}`;
            router.push(url);
          }
          // keyword 쿼리스트링이 없을 때
          if (!searchParams.get(`keyword`)) {
            const url = `?${searchParams.toString()}&keyword=${debouncedSearchText}`;
            router.push(url);
          }
        }
      }
      if (debouncedSearchText === '') {
        newSearchParams.delete('keyword');
        const url = `?${newSearchParams.toString()}`;
        router.push(url);
      }
    })();
  }, [debouncedSearchText]);

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
