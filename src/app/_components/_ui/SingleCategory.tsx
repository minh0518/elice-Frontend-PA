'use client';

import { filter_category } from '@/types/const';
import Chip from './Chip';
import styles from './SingleCategory.module.scss';
import { Fragment } from 'react';

interface Props {
  categoryInfo: filter_category[number];
}

const SingleCategory = ({ categoryInfo }: Props) => {
  return (
    <div className={styles.category}>
      <div className={styles.left}>{categoryInfo.name}</div>
      <div className={styles.right}>
        {categoryInfo.values.map((item, index) => {
          return (
            <Fragment key={index}>
              <Chip
                query={categoryInfo.query}
                values={item}
                index={index}
                startIndex={categoryInfo.startIndex}
                filterInfo={categoryInfo.filterInfo}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SingleCategory;
