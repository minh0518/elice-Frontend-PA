import { OrgCourseListResponse } from '@/types/const';
import { useQuery } from '@tanstack/react-query';

export const useFetchData = (mappedKey: string, encodeUrl: string) => {
  const { data } = useQuery<OrgCourseListResponse>({
    queryKey: ['selected', mappedKey],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/get/list?encodeUrl=${encodeUrl}`, {
        method: 'GET',
        cache: 'no-store',
      });
      return await response.json();
    },
    staleTime: 60000,
  });

  return data;
};
