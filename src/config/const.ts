export const FILTER_CATEGORY = [
  {
    name: '유형',
    query: 'courseType',
    values: ['과목', '챌린지', '테스트'],
    startIndex: 1,
  },
  {
    name: '진행 방식',
    query: 'format',
    values: ['자유 선택형', '순차 완료형'],
    startIndex: 4,
  },
  {
    name: '분야',
    query: 'category',
    values: ['프로그래밍 기초', '데이터 분석', '웹', '인공지능', '알고리즘'],
    startIndex: 6,
  },

  {
    name: '난이도',
    query: 'level',
    values: ['입문', '초급', '중급', '고급'],
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
      '코틀린',
      '스위프트',
      '엔트리',
    ],
    startIndex: 16,
  },
  {
    name: '가격',
    query: 'price',
    values: ['무료', '유료', '구독'],
    startIndex: 29,
  },
] as const;
