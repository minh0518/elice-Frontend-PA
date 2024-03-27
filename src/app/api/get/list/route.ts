import { ERROR_MESSAGE } from '@/config/const';
import { OrgCourseListResponse } from '@/types/const';
import { NextRequest, NextResponse } from 'next/server';

const ELICE_SERVICE_BASE_URL = 'https://api-rest.elice.io/org/academy/course/list';

export async function GET(request: NextRequest) {
  const encodeUrl = request.nextUrl.searchParams.get('encodeUrl');
  const offset = request.nextUrl.searchParams.get('offset');
  const count = request.nextUrl.searchParams.get('count');

  if (encodeUrl && offset && count) {
    const fetchResponse = await fetch(
      `${ELICE_SERVICE_BASE_URL}/?filter_conditions=${encodeURIComponent(encodeUrl)}&sort_by=created_datetime.desc&offset=${offset}&count=${count}`,
      // `https://api-rest.elice.io/org/academy/course/list/`,
      {
        method: 'GET',
        cache: 'no-store',
      },
    );

    const data = await fetchResponse.json();

    // 필요한 데이터만 매핑
    try {
      const extractedData: OrgCourseListResponse = {
        courseCount: data.course_count,
        courses: data.courses.map((course: any) => ({
          courseType: course.course_type,
          tags: course.tags,
          title: course.title,
          shortDescriptioin: course.short_description,
          classType: course.class_type,
          logoFileUrl: course.logo_file_url,
          enrolledRolePeriod: course.enrolled_role_period,
          enrolledRoleBeginDatetime: course.enroll_begin_datetime,
          enrolledRoleEndDatetime: course.enroll_end_datetime,
          beginDatetime: course.begin_datetime,
          endDatetime: course.end_datetime,
          isDiscounted: course.is_discounted,
          discountedPrice: course.discounted_price,
          discountedPriceUsd: course.discounted_price_usd,
          discountRate: course.discount_rate,
          price: course.price,
          priceUsd: course.price_usd,
          enrollType: course.enroll_type,
          isFree: course.is_free,
        })),
      };
      return new NextResponse(JSON.stringify(extractedData), { status: 200 });
    } catch (e) {
      return new NextResponse(ERROR_MESSAGE.WRONG_FETCH, { status: 400 });
    }
  }

  return new NextResponse(ERROR_MESSAGE.WRONG_URL, { status: 400 });
}
