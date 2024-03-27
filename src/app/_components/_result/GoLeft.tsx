interface Props {
  onMoveLeft: () => void;
}

const GoLeft = ({ onMoveLeft }: Props) => {
  return (
    <button style={{ width: '40px' }} onClick={onMoveLeft}>
      L
    </button>
  );
};

export default GoLeft;
