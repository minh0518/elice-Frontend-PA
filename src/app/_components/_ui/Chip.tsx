'use client';

import { filter_category } from '@/types/const';
import styles from './Chip.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import classNames from 'classnames';

interface Props {
  query: filter_category[number]['query'];
  values: filter_category[number]['values'][number];
  index: number;
  startIndex: number;
  filterInfo: filter_category[number]['filterInfo'];
}

const Chip = ({ query, values, index, startIndex }: Props) => {
  const currentChipNumber = startIndex + index;
  const router = useRouter();
  const searchParams = useSearchParams();
  const eachQuery = searchParams.toString().split('&');

  let existQuery: { flag: boolean; index: number } = { flag: false, index: 0 };
  eachQuery.forEach((info, index) => {
    const [currentQuery, value] = info.split('=');
    if (currentQuery === query && Number(value) === currentChipNumber) {
      existQuery.flag = true;
      existQuery.index = index;
    }
  });

  const onChipClick = () => {
    if (existQuery.flag) {
      const shallow = [...eachQuery];
      shallow.splice(existQuery.index, 1);
      router.push(`?${shallow.join('&')}`);
    }

    if (!existQuery.flag) {
      if (!searchParams.toString()) {
        const url = `?${query}=${startIndex + index}`;
        router.push(url);
      } else {
        const url = `?${searchParams.toString()}&${query}=${startIndex + index}`;
        router.push(url);
      }
    }
  };

  return (
    <button
      className={classNames([styles.container, existQuery.flag && styles.clicked])}
      onClick={() => onChipClick()}
    >
      {values}
    </button>
  );
};

export default Chip;
