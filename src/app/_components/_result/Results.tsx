'use client';

import CourseCard from '../_ui/CourseCard';
import styles from './Results.module.scss';
import { Fragment, useState } from 'react';
import { useFetchData } from '@/app/_hooks/useFetchData';
import { useSearchParams } from 'next/navigation';
import Pagination from './Pagination';
import { PAGE_CONTENT_LENGTH, START_OFFSET } from '@/config/const';

interface Props {
  mappedKey: string;
  encodeUrl: string;
}

const Results = ({ mappedKey, encodeUrl }: Props) => {
  const [offset, setOffset] = useState(START_OFFSET);

  const searchParams = useSearchParams();

  const data = useFetchData(
    searchParams.get('keyword'),
    mappedKey,
    encodeUrl,
    offset,
    PAGE_CONTENT_LENGTH,
  );
  return (
    <section className={styles.container}>
      {data && (
        <>
          <div className={styles.total_count}>전체 {data.courseCount}개</div>
          <div className={styles.course_cards}>
            {data.courses.map((item) => {
              return (
                <Fragment key={item.id}>
                  <CourseCard
                    title={item.title}
                    description={item.shortDescriptioin}
                    logoFileUrl={item.logoFileUrl || ''}
                    enrollType={item.enrollType}
                    isFree={item.isFree}
                  />
                </Fragment>
              );
            })}
          </div>
          <div className={styles.pagination}>
            <Pagination offset={offset} setOffset={setOffset} totalLength={data.courseCount} />
          </div>
        </>
      )}
    </section>
  );
};

export default Results;
