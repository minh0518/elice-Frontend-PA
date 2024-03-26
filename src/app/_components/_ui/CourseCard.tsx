'use client';
import Image from 'next/image';
import styles from './CourseCard.module.scss';
import { AiFillBulb } from 'react-icons/ai';

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
        {/* TODO : course.title */}
        <p className={styles.title}>{title}</p>
        {/* description */}
        {/* TODO : course.short_description */}
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
          {/* TODO : course.logo_file_url  */}
          <div className={styles.image_container}>
            {logoFileUrl ? (
              <Image src={logoFileUrl} fill className={styles.logo} alt="" />
            ) : (
              <div className={styles.dummy_img} />
            )}
          </div>
        </div>
      </div>

      {/* label */}
      {/* TODO : course.enroll_type , course.is_free */}
      <p className={styles.label}>구독</p>
    </div>
  );
};

export default CourseCard;
