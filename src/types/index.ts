export interface TimerObjectType {
  id: Date;
  title: string;
  time: TimeType;
}

export interface TimeType {
  hours: number;
  minutes: number;
  seconds: number;
}
