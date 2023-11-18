export interface IHourlyTraffic {
    hour: number;
    traffic: number;
}
  
export interface IDailyTraffic {
    day: number;
    hourly_traffic: IHourlyTraffic[];
}
export interface IArticle {
    id: string;
    url: string;
    author: string;
    image_url: string;
    geo: string;
    daily_traffic: {
      day: number;
      hourly_traffic: {
        hour: number;
        traffic: number;
      }[];
    }[];
  }

export interface IPaginatedArticles<T> {
    paginatedArticles: T;
    pageNumber: number | null;
}

export interface HourlyTraffic {
  hour: number;
  traffic: number;
}

export interface DailyTraffic {
  day: number;
  hourly_traffic: HourlyTraffic[];
}