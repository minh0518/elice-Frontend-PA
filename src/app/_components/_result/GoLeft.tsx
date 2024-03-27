import { FaChevronLeft } from 'react-icons/fa';

interface Props {
  onMoveLeft: () => void;
}

const GoLeft = ({ onMoveLeft }: Props) => {
  return (
    <button style={{ width: '40px' }} onClick={onMoveLeft}>
      <FaChevronLeft width="40px" />
    </button>
  );
};

export default GoLeft;
