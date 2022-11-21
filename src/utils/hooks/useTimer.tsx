import {useEffect, useRef, useState, useCallback} from 'react';
import {updateItem} from 'src/services';
import {TimerObjectType} from 'src/types';
import {formatSecondsToTime} from '../helpers/formatSecondsToTime';

const INTERVAL_DELAY = 1000;

export const useTimer = (
  initialValue: number,
  isStarted: boolean,
  element: TimerObjectType,
) => {
  const [seconds, setSeconds] = useState(initialValue);
  const timerRef = useRef(seconds);
  const time = formatSecondsToTime(seconds);

  const resetTimer = useCallback(() => {
    timerRef.current = initialValue;
  }, [initialValue]);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (isStarted) {
        timerRef.current += 1;
        if (timerRef.current < 0) {
          clearInterval(timerId);
        } else {
          setSeconds(timerRef.current);
        }
      }
    }, INTERVAL_DELAY);
    return () => {
      clearInterval(timerId);
    };
  }, [initialValue, isStarted]);

  (async () => {
    const changedElement: TimerObjectType = await JSON.parse(
      JSON.stringify(element),
    );
    changedElement.time.hours = +time.hours;
    changedElement.time.minutes = +time.minutes;
    changedElement.time.seconds = +time.seconds;
    await updateItem(changedElement);
  })();

  return {seconds, time, resetTimer};
};
