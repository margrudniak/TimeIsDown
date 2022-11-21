export const formatSecondsToTime = (seconds: number) => {
  return {
    hours: new Date(seconds * 1000).toISOString().slice(11, 13),
    minutes: new Date(seconds * 1000).toISOString().slice(14, 16),
    seconds: new Date(seconds * 1000).toISOString().slice(17, 19),
  };
};
