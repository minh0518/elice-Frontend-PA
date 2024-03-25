'use client';

import { filter_category } from '@/types/const';
import styles from './Chip.module.scss';

interface Props {
  query: filter_category[number]['query'];
  values: filter_category[number]['values'][number];
}

const Chip = ({ query, values }: Props) => {
  return <button className={styles.container}>{values}</button>;
};

export default Chip;
