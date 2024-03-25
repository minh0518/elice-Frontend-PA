'use client';

import CourseCard from '../_ui/CourseCard';
import styles from './Results.module.scss';

const Results = () => {
  return (
    <section className={styles.container}>
      <div className={styles.total_count}>전체 12개</div>
      <div className={styles.course_cards}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
};

export default Results;
