import { NextRequest, NextResponse } from 'next/server';

const ELICE_SERVICE_BASE_URL = 'https://api-rest.elice.io/org/academy/course/list';

export async function GET(request: NextRequest) {
  const encodeUrl = request.nextUrl.searchParams.get('encodeUrl');

  if (encodeUrl) {
    const fetchResponse = await fetch(
      `${ELICE_SERVICE_BASE_URL}/?filter_conditions=${encodeURIComponent(encodeUrl)}&sort_by=created_datetime.desc&offset=0&count=20`,
      {
        method: 'GET',
        cache: 'no-store',
      },
    );
  }

  return new NextResponse('데이터를 불러오는 도중 에러가 발생했습니다', { status: 500 });
}
