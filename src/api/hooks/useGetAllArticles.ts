import { useInfiniteQuery } from '@tanstack/react-query';
import { IArticle, IPaginatedArticles } from '../../../interfaces';
import { baseURL } from '../config';

const fetchAllArticles = async (page: number, limit: number = 10): Promise<IPaginatedArticles<IArticle[]>> => {
  try {
    const response = await fetch(`${baseURL}/articles?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

const useGetAllArticles = () => {
  return useInfiniteQuery({
    queryKey: ['getAllArticles'],
    queryFn: async ({ pageParam }): Promise<IPaginatedArticles<IArticle[]>> =>  {return await fetchAllArticles(pageParam as number)},
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) => lastPage.pageNumber,
  });
};

export default useGetAllArticles;
