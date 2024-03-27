import { ERROR_MESSAGE, GC_TIME, STALE_TIME } from '@/config/const';
import { OrgCourseListResponse } from '@/types/const';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

export const useFetchData = (
  searchWord: string | null,
  mappedKey: string,
  encodeUrl: string,
  offset: number,
  count: number,
) => {
  const { data } = useQuery<OrgCourseListResponse>({
    queryKey: ['selected', searchWord, mappedKey, offset, count],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/api/get/list?encodeUrl=${encodeUrl}&offset=${offset}&count=${count}`,
        {
          method: 'GET',
          cache: 'no-store',
        },
      );
      if (response.ok) {
        const jsonData: OrgCourseListResponse = await response.json();
        const coursesWithId = jsonData.courses.map((course) => ({
          ...course,
          id: uuidv4(),
        }));

        return {
          ...jsonData,
          courses: coursesWithId,
        };
      }
      const errorText = await response.text();
      throw new Error(errorText || ERROR_MESSAGE.OHTER);
    },
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });

  return data;
};
