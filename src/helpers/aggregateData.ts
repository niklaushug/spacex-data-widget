import {
  ChartData,
  LaunchesPastDataFragment,
} from '../typescript/generated-types';

export function prepareDataForCharts(
  data: LaunchesPastDataFragment[]
): ChartData[] {
  // TODO improve this: check out Map/WeakMap and or UnderscoreJS
  const launchesYear = data.reduce((acc: { [key: string]: number }, cur) => {
    const launchYear = cur.launch_year || 'unknown';
    acc[launchYear] = (acc[launchYear] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(launchesYear).map(([year, size]) => ({
    name: year,
    y: size,
  }));
}
