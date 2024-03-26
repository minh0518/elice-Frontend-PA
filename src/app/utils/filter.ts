import { FILTER_CATEGORY } from '@/config/const';
import { FilterProps } from '../page';

type FilterType =
  | { tag_id: number }
  | { course_type: number }
  | { $or: { course_type: number }[] }
  | { enroll_type: number; is_free?: boolean }
  | { status: number }
  | [];

type FilterCondition = {
  $or: FilterType[];
};

type BaseFilter = {
  $and: ({ title: string } | FilterCondition | { is_datetime_enrollable: boolean })[];
};

export const getFilterCondition = ({ searchParams }: FilterProps) => {
  const INDEX_INFO = {
    courseType: 7,
    format: 6,
    category: 1,
    level: 5,
    programmingLanguage: 4,
    price: 3,
  };

  const BASE_FILTER: BaseFilter = {
    $and: [
      { title: '%%' } /** 검색 - 유지  */,
      { $or: [] } /** category: [1] */,
      { $or: [{ status: 2 }, { status: 3 }, { status: 4 }] } /** 유지  */,
      { $or: [] } /** price: [3] - 유지 */,
      { $or: [] } /** programmingLanguage: [4] */,
      { $or: [] } /** level: [5] */,
      { $or: [] } /** format: [6] */,
      { $or: [] } /** courseType: [7] */,
      { is_datetime_enrollable: true } /**  유지  */,
    ],
  };

  for (let key in searchParams) {
    // 쿼리스트링에 선택된 숫자

    const searchParamsNumbers = searchParams[key as keyof FilterProps['searchParams']];

    if (searchParamsNumbers) {
      let numbers;
      if (Array.isArray(searchParamsNumbers)) numbers = searchParamsNumbers.map(Number);
      else numbers = [Number(searchParamsNumbers)];

      for (let number of numbers) {
        // BASE_FILTER에서 변경할 인덱스
        const updateTargetIndex = INDEX_INFO[key as keyof FilterProps['searchParams']];

        // BASE_FILTER에서 변경할 인덱스의 배열
        const filterArr = (BASE_FILTER.$and[updateTargetIndex] as FilterCondition).$or;

        // FILTER_CATEGORY에서 현재 쿼리스트링에 맞는 정보 추출 (깊은복사)
        const targetCategory = JSON.parse(
          JSON.stringify(FILTER_CATEGORY.find((item) => item.query === key)),
        );

        if (
          targetCategory &&
          targetCategory.filterInfo[number - targetCategory.startIndex] !== undefined
        ) {
          filterArr?.push(targetCategory.filterInfo[number - targetCategory.startIndex]);
        }
      }
    }
  }

  const shallow = BASE_FILTER.$and.filter((i, index) => {
    if (index === 0 || index === 3 || index === 8) return true;
    else {
      return (i as FilterCondition).$or.length;
    }
  });
  BASE_FILTER.$and = shallow;

  return BASE_FILTER;
};
