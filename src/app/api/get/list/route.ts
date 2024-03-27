import { OrgCourseListResponse } from '@/types/const';
import { NextRequest, NextResponse } from 'next/server';

const ELICE_SERVICE_BASE_URL = 'https://api-rest.elice.io/org/academy/course/list';

export async function GET(request: NextRequest) {
  const encodeUrl = request.nextUrl.searchParams.get('encodeUrl');
  const offset = request.nextUrl.searchParams.get('offset');
  const count = request.nextUrl.searchParams.get('count');

  if (encodeUrl) {
    const fetchResponse = await fetch(
      `${ELICE_SERVICE_BASE_URL}/?filter_conditions=${encodeURIComponent(encodeUrl)}&sort_by=created_datetime.desc&offset=${offset}&count=${count}`,
      {
        method: 'GET',
        cache: 'no-store',
      },
    );

    const data = await fetchResponse.json();

    const transformedData: OrgCourseListResponse = {
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

    return new NextResponse(JSON.stringify(transformedData), { status: 200 });
  }

  return new NextResponse('데이터를 불러오는 도중 에러가 발생했습니다', { status: 500 });
}
