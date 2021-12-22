export interface ChartData {
  name: string;
  y: unknown; // TODO Why is this unknown?
}

// eslint-disable-next-line no-shadow
export enum DisplayMode {
  BAR = 'bar',
  PIE = 'pie',
  TABLE = 'table',
}
