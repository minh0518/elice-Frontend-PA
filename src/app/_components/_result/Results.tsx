'use client';

import { useQuery } from '@tanstack/react-query';
import CourseCard from '../_ui/CourseCard';
import styles from './Results.module.scss';
import { OrgCourseListResponse } from '@/types/const';
import { Fragment } from 'react';
import { useFetchData } from '@/app/_hooks/useFetchData';

interface Props {
  mappedKey: string;
  encodeUrl: string;
}

const Results = ({ mappedKey, encodeUrl }: Props) => {
  const data = useFetchData(mappedKey, encodeUrl);
  return (
    <section className={styles.container}>
      {data && (
        <>
          <div className={styles.total_count}>전체 {data.courseCount}개</div>
          <div className={styles.course_cards}>
            {data.courses.map((item, index) => {
              return (
                <Fragment key={index}>
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
        </>
      )}
    </section>
  );
};

export default Results;
