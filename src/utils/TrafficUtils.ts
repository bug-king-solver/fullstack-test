import { DailyTraffic } from "../../interfaces"

export const calculateTotalTraffic = (trafficData: DailyTraffic[]): number => {
  if (!Array.isArray(trafficData)) {
    console.error('Error: trafficData is not an array');
    return 0;
  }

  return trafficData.reduce(
    (sum, day) =>
      sum + day.hourly_traffic.reduce((hourSum, hour) => hourSum + hour.traffic, 0),
    0
  );
};
