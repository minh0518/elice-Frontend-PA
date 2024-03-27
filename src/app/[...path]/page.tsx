import { ERROR_MESSAGE } from '@/config/const';
import styles from './page.module.scss';
import Link from 'next/link';

const page = () => {
  return (
    <div className={styles.container}>
      <h1>{ERROR_MESSAGE.NOT_FOUND}</h1>
      <Link href={'/'}>홈</Link>
    </div>
  );
};

export default page;
