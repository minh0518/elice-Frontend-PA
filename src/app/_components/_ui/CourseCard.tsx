import styles from './CourseCard.module.scss';
import { AiFillBulb } from 'react-icons/ai';

const CourseCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 분류 */}
        <p className={styles.classification}>프로그래밍 기초</p>
        {/* title */}
        {/* TODO : course.title */}
        <p className={styles.title}>Docker</p>
        {/* description */}
        {/* TODO : course.short_description */}
        <p className={styles.description}>
          도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명도커설명
        </p>
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
          <div className={styles.logo}>LOGO</div>
        </div>
      </div>

      {/* label */}
      {/* TODO : course.enroll_type , course.is_free */}
      <p className={styles.label}>구독</p>
    </div>
  );
};

export default CourseCard;
