'use client';
import { Dispatch, Fragment, SetStateAction } from 'react';
import styles from './Pagination.module.scss';
import GoLeft from './GoLeft';
import GoRight from './GoRight';
import { PAGE_CONTENT_LENGTH, PAGINATION_REST_BUTTON_LENGTH } from '@/config/const';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
  totalLength: number;
}

const Pagination = ({ offset, setOffset, totalLength }: Props) => {
  const totalPageCount = Math.ceil(totalLength / PAGE_CONTENT_LENGTH);
  const currentIndex = Math.floor(offset / PAGE_CONTENT_LENGTH);
  const currentPage = Math.floor(offset / PAGE_CONTENT_LENGTH) + 1;

  const sliceStartIndex =
    currentIndex - PAGINATION_REST_BUTTON_LENGTH < 0
      ? 0
      : currentIndex - PAGINATION_REST_BUTTON_LENGTH;

  const sliceEndIndex =
    currentIndex + (PAGINATION_REST_BUTTON_LENGTH + 1) >= totalPageCount
      ? totalPageCount
      : currentIndex + (PAGINATION_REST_BUTTON_LENGTH + 1);

  const pageArr: [number, string][] = new Array(totalPageCount)
    .fill(undefined)
    .map((_, index) => [index, uuidv4()]);

  const onMoveLeft = (index: number) => {
    if (index === 0) setOffset(0);
    if (index > 0) setOffset((index - 1) * PAGE_CONTENT_LENGTH);
  };
  const onMoveRight = (index: number) => {
    if (index === totalPageCount - 1) setOffset((totalPageCount - 1) * PAGE_CONTENT_LENGTH);
    if (index < totalPageCount - 1) setOffset((index + 1) * PAGE_CONTENT_LENGTH);
  };

  return (
    <div className={styles.container}>
      <GoLeft onMoveLeft={() => onMoveLeft(currentIndex)} />
      {pageArr.slice(sliceStartIndex, sliceEndIndex).map(([index, id]) => (
        <Fragment key={id}>
          <button
            onClick={() => setOffset(index * PAGE_CONTENT_LENGTH)}
            style={{ width: '40px', height: '40px' }}
          >
            {index + 1}
          </button>
        </Fragment>
      ))}
      <GoRight onMoveRight={() => onMoveRight(currentIndex)} />
    </div>
  );
};

export default Pagination;
