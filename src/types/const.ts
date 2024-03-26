import { FILTER_CATEGORY } from '@/config/const';

export type filter_category = typeof FILTER_CATEGORY;

/** 코스페이지를 만들기위해 필요한 data만 추출 */
export interface OrgCourseListResponse {
  courseCount: number;
  courses: {
    courseType: number;
    tags: string[];
    title: string;
    shortDescriptioin: string;
    classType: number;
    logoFileUrl: null | string;
    enrolledRolePeriod: null | string;
    enrolledRoleBeginDatetime: number | null;
    enrolledRoleEndDatetime: number | null;
    beginDatetime: number;
    endDatetime: null | number;
    isDiscounted: boolean;
    discountedPrice: string;
    discountedPriceUsd: string;
    discountRate: null | any;
    price: string;
    priceUsd: string;
    enrollType: number;
    isFree: boolean;
  }[];
}
