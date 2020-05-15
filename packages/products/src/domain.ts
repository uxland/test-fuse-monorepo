export interface SpeedPost {
  postalCode: string;
  speed: number;
  timestamp: Date;
}

export interface SpeedResults {
  range1: number;
  range2: number;
  range3: number;
  range4: number;
  range5: number;
  total: number;
}
