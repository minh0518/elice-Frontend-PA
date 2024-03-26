import { OrgCourseListResponse } from '@/types/const';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

export const useFetchData = (mappedKey: string, encodeUrl: string) => {
  const { data } = useQuery<OrgCourseListResponse>({
    queryKey: ['selected', mappedKey],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/get/list?encodeUrl=${encodeUrl}`, {
        method: 'GET',
        cache: 'no-store',
      });

      const jsonData: OrgCourseListResponse = await response.json();

      const coursesWithId = jsonData.courses.map((course) => ({
        ...course,
        id: uuidv4(),
      }));

      return {
        ...jsonData,
        courses: coursesWithId,
      };
    },
    staleTime: 60000,
  });

  return data;
};
