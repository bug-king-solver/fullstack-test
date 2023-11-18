import { NextFunction, Request, Response } from "express"
import { ArticleService } from "../services"
import { rawData } from "../database"
import { IPaginatedArticles } from "../../interfaces";

const getAllArticles = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const sortedArticles = ArticleService.sortArticlesByTraffic(rawData.traffic_data);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedArticles = sortedArticles.slice(startIndex, endIndex);
    const nextPage = endIndex < sortedArticles.length ? page + 1 : null;

    const response: IPaginatedArticles<typeof paginatedArticles> = {
        paginatedArticles: paginatedArticles,
        pageNumber: nextPage
    };

    res.json(response);
  } catch (error) {
    next(error);
  }
}

const ArticleController = {
  getAllArticles,
}

export default ArticleController;