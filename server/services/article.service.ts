import { IArticle } from '../../interfaces';

const sortArticlesByTraffic = (articles: IArticle[]): IArticle[] => {
  return [...articles].sort((a, b) =>
    getTrafficSum(b) - getTrafficSum(a)
  );

  function getTrafficSum(article: IArticle): number {
    return article.daily_traffic.reduce((sum, day) =>
      sum + day.hourly_traffic.reduce((hourSum, hour) => hourSum + hour.traffic, 0), 0
    );
  }
};

const ArticleService = {
  sortArticlesByTraffic
};

export default ArticleService;
