import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

const useCountdown = (seconds: number) => {
  const [timeLeft, setTimeleft] = useState(seconds);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const startCount = useCallback(() => {
    console.log("starting count");

    intervalRef.current = setInterval(() => {
      setTimeleft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [setTimeleft]);

  const resetCountdown = useCallback(() => {
    console.log("reseting countdown");
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeleft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      console.log("clearing timer");

      clearInterval(intervalRef.current);
    }
  }, [timeLeft, intervalRef]);
  return { timeLeft, startCount, resetCountdown };
};

export default useCountdown;
