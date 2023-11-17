import { Request, Response } from "express"
import { ArticleService } from "../services"
import { rawData } from "../database"

const getAllArticles = (req: Request, res: Response): void => {
  const articles = ArticleService.sortArticlesByTraffic(rawData.traffic_data);
  res.json(articles);
}

const ArticleController = {
  getAllArticles,
}

export default ArticleController;