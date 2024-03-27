'use client';
import { useEffect } from 'react';
import styles from './error.module.scss';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <h1>{error.message}</h1>
      <button onClick={() => (window.location.href = '/')}>재시도하기</button>
    </div>
  );
}
