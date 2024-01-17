import dayjs from "dayjs";
import IUnitOfTime from "interfaces/IUnitOfTime";

const getAgo = (date: dayjs.Dayjs) => {
  const now = dayjs();
  const unitOfTimes: IUnitOfTime[] = [
    { unit: "seconds", korean: "초", time: 60 },
    { unit: "minutes", korean: "분", time: 60 },
    { unit: "hours", korean: "시간", time: 24 },
    { unit: "days", korean: "일", time: 7 },
    { unit: "weeks", korean: "주", time: 4 },
    { unit: "months", korean: "개월", time: 12 },
    { unit: "years", korean: "년", time: Infinity },
  ];

  for (const unitOfTime of unitOfTimes) {
    const diff = now.diff(date, unitOfTime.unit);

    if (diff < unitOfTime.time) {
      return `${diff}${unitOfTime.korean} 전`;
    }
  }

  return "0초 전";
};

export default getAgo;
