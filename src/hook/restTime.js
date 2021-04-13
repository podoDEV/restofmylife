import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const date = {
  YEAR: 60 * 60 * 24 * 365,
  DAY: 60 * 60 * 24,
  HOUR: 60 * 60,
  MIN: 60,
  SEC: 1,
};

function restTime(birth, gender) {
  const lifeExpectancy = gender === 'male' ? 79.7 : 85.7;
  const leaveTime = dayjs(birth).add(lifeExpectancy, 'year');

  const cur = dayjs();

  let remainingTime = leaveTime.unix() - cur.unix();

  return Object.values(date).map((sec) => {
    const k = Math.floor(remainingTime / sec);
    remainingTime -= k * sec;

    return k;
  });
}

export default function useRestTime(date, male) {
  const [seconds, setSeconds] = useState(null);

  useEffect(() => {
    let drift = 1000 - dayjs().get('ms');

    const interval = setTimeout(() => {
      const d = restTime(date, male);
      setSeconds(d);
    }, drift);

    return () => clearTimeout(interval);
  }, [date, seconds]);

  return seconds;
}
