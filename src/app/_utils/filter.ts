import { ERROR_MESSAGE, FILTER_CATEGORY, INDEX_INFO } from '@/config/const';
import { FilterProps } from '../page';

type FilterType =
  | { tag_id: number }
  | { course_type: number }
  | { $or: { course_type: number }[] }
  | { enroll_type: number; is_free?: boolean }
  | { status: number }
  | [];

type SearchKeyword = { title: string };
type FilterCondition = {
  $or: FilterType[];
};

type BaseFilter = {
  $and: (SearchKeyword | FilterCondition | { is_datetime_enrollable: boolean })[];
};

type IndexInfoKey = keyof typeof INDEX_INFO;
function isKeyOfIndexInfo(key: any): key is IndexInfoKey {
  return key in INDEX_INFO;
}

export const getFilterCondition = ({ searchParams }: FilterProps) => {
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
    // 쿼리스트링 전체 정보 객체
    const searchParamsInfo = searchParams[key as keyof FilterProps['searchParams']];

    if (searchParamsInfo) {
      // 쿼리스트링 객체 내부 값
      let values;
      if (Array.isArray(searchParamsInfo)) values = searchParamsInfo.map(Number);
      if (!Array.isArray(searchParamsInfo)) {
        // searchParamsValues가 단일 값이라면 숫자(카테고리)인지 문자열(title)인지 판별
        const numberValue = Number(searchParamsInfo);
        values = isNaN(numberValue) ? searchParamsInfo : [numberValue];
      }

      // 카테고리 필터링 처리
      if (Array.isArray(values)) {
        for (let value of values) {
          if (isKeyOfIndexInfo(key)) {
            // BASE_FILTER에서 변경할 인덱스
            const updateTargetIndex = INDEX_INFO[key];

            // BASE_FILTER에서 변경할 인덱스의 배열
            const filterArr = (BASE_FILTER.$and[updateTargetIndex] as FilterCondition).$or;

            // FILTER_CATEGORY에서 현재 쿼리스트링에 맞는 필터링 정보 추출 (깊은복사)
            const targetCategory = JSON.parse(
              JSON.stringify(FILTER_CATEGORY.find((item) => item.query === key)),
            );

            if (
              targetCategory &&
              targetCategory.filterInfo[value - targetCategory.startIndex] !== undefined
            ) {
              filterArr?.push(targetCategory.filterInfo[value - targetCategory.startIndex]);
            }
          } else {
            throw new Error(ERROR_MESSAGE.WRONG_FILTER_QUERY);
          }
        }
      } else {
        // title 필터링 처리
        BASE_FILTER.$and[0] = { title: `%${String(values)}%` };
      }
    }
  }

  const shallow = BASE_FILTER.$and.filter((item, index) => {
    if (index === 2 || index === 3 || index === 8) return true;
    if (index === 0) {
      return item;
    } else {
      return (item as FilterCondition).$or.length;
    }
  });
  BASE_FILTER.$and = shallow;

  return BASE_FILTER;
};
