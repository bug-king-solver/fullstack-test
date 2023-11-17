import { DailyTraffic } from "../../interfaces"

export const calculateTotalTraffic = (trafficData: DailyTraffic[]): number => {
    return trafficData.reduce(
      (sum, day) =>
        sum + day.hourly_traffic.reduce((hourSum, hour) => hourSum + hour.traffic, 0),
      0
    );
};