import { useQuery, UseQueryResult } from 'react-query';
import { IArticle } from '../../../interfaces';
import { baseURL } from '../config';

const fetchAllArticles = async (): Promise<IArticle[]> => {
  try {
    const response = await fetch(`${baseURL}/articles`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data as IArticle[];
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

const useGetAllArticles = (): UseQueryResult<IArticle[], Error> => {
  return useQuery({
    queryKey: 'getAllArticles',
    queryFn: fetchAllArticles,
    retry: true,
  });
};

export default useGetAllArticles;
