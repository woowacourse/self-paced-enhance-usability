import { useState } from "react";
import useDebouncedATMessage from "./useDebouncedATMessage";

const MAX_PASSENGERS = 3;

const useAdultCount = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [alertMessage, setAlertMessage] = useState("");
  const { handleDebouncedMessage, messageForATUser } =
    useDebouncedATMessage(200);

  const incrementCount = () => {
    if (adultCount + 1 > MAX_PASSENGERS) {
      alert("더이상 승객을 추가할 수 없습니다.");
      setAlertMessage("더이상 승객을 추가할 수 없습니다.");
      return;
    }
    if (alertMessage) {
      setAlertMessage("");
    }

    handleDebouncedMessage(`성인 승객 수는 ${adultCount + 1}명 입니다.`);
    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    if (adultCount === 1) {
      alert("승객은 최소 1명 이상이어야 합니다.");
      setAlertMessage("승객은 최소 1명 이상이어야 합니다.");
      return;
    }
    if (alertMessage) {
      setAlertMessage("");
    }

    handleDebouncedMessage(`성인 승객 수는 ${adultCount - 1}명 입니다.`);
    setAdultCount((prev) => Math.max(1, prev - 1));
  };

  return {
    adultCount,
    incrementCount,
    decrementCount,
    alertMessage,
    messageForATUser,
  };
};

export default useAdultCount;
