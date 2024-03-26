import { FilterProps } from '../page';

export const generateQueryKey = ({ searchParams }: FilterProps) => {
  const result = new Map<string, number[]>([
    ['courseType', []],
    ['format', []],
    ['category', []],
    ['level', []],
    ['programmingLanguage', []],
    ['price', []],
  ]);

  for (let key in searchParams) {
    if (result.has(key)) {
      const exist = result.get(key);

      const values = searchParams[key as keyof FilterProps['searchParams']];

      if (exist && values) {
        if (Array.isArray(values)) {
          exist.push(...values.map(Number));
        } else {
          exist.push(Number(values));
        }
        exist.sort((a, b) => a - b);
      }
    }
  }
  return Array.from(result);
};
