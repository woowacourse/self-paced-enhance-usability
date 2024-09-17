import { useState } from "react";

interface UseCounterParams {
  min: { value: number; alertMessage: string };
  max: { value: number; alertMessage: string };
}

interface UseCounterReturn {
  count: number;
  alertMessage: string;
  decrementCount: () => void;
  incrementCount: () => void;
}

export const useCounter = ({ min, max }: UseCounterParams): UseCounterReturn => {
  const [count, setCount] = useState(min.value);
  const [alertMessage, setAlertMessage] = useState("");

  const getAlertMessage = (count: number): string => {
    switch (count) {
      case min.value - 1:
        return min.alertMessage;
      case max.value + 1:
        return max.alertMessage;
      default:
        return "";
    }
  };

  const updateAlertMessage = (count: number) => {
    setAlertMessage(getAlertMessage(count));
  };

  const incrementCount = () => {
    setCount((prev) => {
      const nextCount = prev + 1;
      updateAlertMessage(nextCount);
      return Math.min(max.value, nextCount);
    });
  };

  const decrementCount = () => {
    setCount((prev) => {
      const nextCount = prev - 1;
      updateAlertMessage(nextCount);
      return Math.max(min.value, nextCount);
    });
  };

  return {
    count,
    alertMessage,
    decrementCount,
    incrementCount,
  };
};
