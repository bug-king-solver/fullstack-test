import { IArticle } from '../../interfaces';
import {calculateTotalTraffic} from '../../src/utils'

const sortArticlesByTraffic = (articles: IArticle[]): IArticle[] => {
  return [...articles].sort((a, b) =>
    calculateTotalTraffic(b.daily_traffic) - calculateTotalTraffic(a.daily_traffic)
  );
};

const ArticleService = {
  sortArticlesByTraffic
};

export default ArticleService;
