import classNames from 'classnames';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './Arrow.module.scss';

interface Props {
  onMoveLeft: () => void;
  disabled: boolean;
}

const GoLeft = ({ onMoveLeft, disabled }: Props) => {
  return (
    <button onClick={onMoveLeft} className={classNames(disabled ? styles.disabled : styles.basic)}>
      <FaChevronLeft width="40px" />
    </button>
  );
};

export default GoLeft;
