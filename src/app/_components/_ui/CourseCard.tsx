'use client';
import Image from 'next/image';
import styles from './CourseCard.module.scss';
import { AiFillBulb } from 'react-icons/ai';
import { checkLabel } from '@/app/_utils/checkLabel';

interface Props {
  title: string;
  description: string;
  logoFileUrl: string;
  enrollType: number;
  isFree: boolean;
}
const CourseCard = ({ title, description, logoFileUrl, enrollType, isFree }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 분류 */}
        <p className={styles.classification}>(생략)</p>
        {/* title */}
        <p className={styles.title}>{title}</p>
        {/* description */}
        <p className={styles.description}>{description}</p>
        {/* icontext & logo*/}
        <div className={styles.detail}>
          {/* icontext  */}
          <ul className={styles.icon_text}>
            <li>
              <i>
                <AiFillBulb size="24px" />
              </i>
              난이도 : 미설정
            </li>
            <li>
              <i>
                <AiFillBulb size="24px" />
              </i>
              수업 : 온라인
            </li>
            <li>
              <i>
                <AiFillBulb size="24px" />
              </i>
              기간 : 무제한
            </li>
          </ul>

          {/* logo */}
          <div className={styles.image_container}>
            {logoFileUrl ? (
              <Image src={logoFileUrl} fill className={styles.logo} sizes="52px" alt="" />
            ) : (
              <div className={styles.dummy_img} />
            )}
          </div>
        </div>
      </div>

      {/* label */}
      <p className={styles.label}>{checkLabel(enrollType, isFree)}</p>
    </div>
  );
};

export default CourseCard;
