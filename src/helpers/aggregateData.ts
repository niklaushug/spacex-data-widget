import { LaunchesPastI, LaunchPastI } from '../typescript/types.js';

export function prepareDataForCharts(data: LaunchesPastI) {
  // TODO improve this: check out Map/WeakMap and or UnderscoreJS
  // @ts-ignore
  const launchesYear = data.reduce((acc: LaunchesPastI, cur: LaunchPastI) => {
    // @ts-ignore
    acc[cur.launch_year] = (acc[cur.launch_year] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(launchesYear).map(([year, size]) => ({
    name: year,
    y: size,
  }));
}
