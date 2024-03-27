interface Props {
  onMoveRight: () => void;
}
const GoRight = ({ onMoveRight }: Props) => {
  return (
    <button style={{ width: '40px' }} onClick={onMoveRight}>
      R
    </button>
  );
};

export default GoRight;
