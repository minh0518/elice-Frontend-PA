export const checkLabel = (enrollType: number, isFree: boolean) => {
  if (enrollType === 0 && isFree) return '무료';
  if (enrollType === 0 && !isFree) return '유료';
  if (enrollType === 4) return '구독';
  else return '관리자 등록';
};
