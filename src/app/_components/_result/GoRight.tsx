import { FaChevronRight } from 'react-icons/fa';

interface Props {
  onMoveRight: () => void;
}
const GoRight = ({ onMoveRight }: Props) => {
  return (
    <button onClick={onMoveRight}>
      <FaChevronRight width="40px" />
    </button>
  );
};

export default GoRight;
