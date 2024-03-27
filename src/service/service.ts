import { v4 as uuidv4 } from 'uuid';
import { OrgCourseListResponse } from '@/types/const';
import { ERROR_MESSAGE } from '@/config/const';

export const filteredDataApi = {
  getFilteredData: async (encodeUrl: string, offset: number, count: number) => {
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
};
