import classNames from 'classnames';
import { FaChevronRight } from 'react-icons/fa';
import styles from './Arrow.module.scss';
interface Props {
  onMoveRight: () => void;
  disabled: boolean;
}
const GoRight = ({ onMoveRight, disabled }: Props) => {
  return (
    <button onClick={onMoveRight} className={classNames(disabled ? styles.disabled : styles.basic)}>
      <FaChevronRight width="40px" />
    </button>
  );
};

export default GoRight;
