import { FilterProps } from '../page';

export const generateQueryKey = ({ searchParams }: FilterProps) => {
  const result = [];
  for (let key in searchParams) {
    const values = searchParams[key as keyof FilterProps['searchParams']];
    if (!values) continue;

    if (Array.isArray(values)) {
      result.push(...values.map(Number));
    }

    if (!Array.isArray(values)) {
      const numberValue = Number(values);
      if (!isNaN(numberValue)) {
        result.push(Number(numberValue));
      }
    }
  }

  result.sort((a, b) => a - b);
  return result;
};
