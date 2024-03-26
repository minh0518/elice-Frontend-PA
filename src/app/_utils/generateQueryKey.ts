import { FilterProps } from '../page';

export const generateQueryKey = ({ searchParams }: FilterProps) => {
  const result: { search: string; values: number[] } = { search: '', values: [] };
  for (let key in searchParams) {
    const values = searchParams[key as keyof FilterProps['searchParams']];
    if (!values) continue;

    if (Array.isArray(values)) {
      result.values.push(...values.map(Number));
    }
    if (!Array.isArray(values)) {
      // searchParamsValues가 단일 값이라면 숫자(카테고리)인지 문자열(title)인지 판별
      const filteredValue = Number(values);
      if (isNaN(filteredValue)) {
        result.search = String(values);
      }
      if (!isNaN(filteredValue)) {
        result.values.push(Number(filteredValue));
      }
    }
  }
  result.values.sort((a, b) => a - b);
  return result;
};
