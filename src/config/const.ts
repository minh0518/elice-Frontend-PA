export const FILTER_CATEGORY = [
  {
    name: '유형',
    query: 'courseType',
    values: ['과목', '챌린지', '테스트'],
    filterInfo: [
      { $or: [{ course_type: 0 }, { course_type: 2 }] },
      { course_type: 1 },
      { course_type: 3 },
    ],
    startIndex: 1,
  },
  {
    name: '진행 방식',
    query: 'format',
    values: ['자유 선택형', '순차 완료형'],
    filterInfo: [{ course_type: 0 }, { course_type: 2 }],
    startIndex: 4,
  },
  {
    name: '분야',
    query: 'category',
    values: ['프로그래밍 기초', '데이터 분석', '웹', '인공지능', '알고리즘'],
    filterInfo: [{ tag_id: 12 }, { tag_id: 13 }, { tag_id: 14 }, { tag_id: 15 }, { tag_id: 16 }],
    startIndex: 6,
  },

  {
    name: '난이도',
    query: 'level',
    values: ['입문', '초급', '중급', '고급'],
    filterInfo: [{ tag_id: 100 }, { tag_id: 101 }, { tag_id: 102 }, { tag_id: 103 }],
    startIndex: 11,
  },

  {
    name: '언어',
    query: 'programmingLanguage',
    values: [
      'C',
      'C++',
      '자바',
      '파이썬',
      '자바스트립트',
      'R',
      'HTML/CSS',
      'SQL',
      '아두이노',
      '스크래치',
    ],
    filterInfo: [
      { tag_id: 7 },
      { tag_id: 8 },
      { tag_id: 9 },
      { tag_id: 10 },
      { tag_id: 19 },
      { tag_id: 20 },
      { tag_id: 21 },
      { tag_id: 24 },
      { tag_id: 25 },
      { tag_id: 26 },
      { tag_id: 28 },
      { tag_id: 29 },
      { tag_id: 30 },
    ],
    startIndex: 15,
  },
  {
    name: '가격',
    query: 'price',
    values: ['무료', '유료', '구독'],
    startIndex: 25,
    filterInfo: [
      { enroll_type: 0, is_free: true },
      { enroll_type: 0, is_free: false },
      { enroll_type: 4 },
    ],
  },
] as const;

/** pagination */
export const START_OFFSET = 0;
export const PAGE_CONTENT_LENGTH = 20 as const;
export const PAGINATION_REST_BUTTON_LENGTH = 4 as const;

/** Tanstack-query */
export const STALE_TIME = 1000 * 60 * 60 * 24;
export const GC_TIME = 1000 * 60 * 5;

/** errorMessage */
export const ERROR_MESSAGE = {
  WRONG_FETCH: '데이터를 불러오는 도중 문제가 발생했습니다.',
  WRONG_URL: 'URL정보를 확인해 주세요.',
  OHTER: '문제가 발생했습니다.',
};
