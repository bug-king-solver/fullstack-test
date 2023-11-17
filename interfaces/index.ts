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
    daily_traffic: IDailyTraffic[];
    total_traffic: number;
  }