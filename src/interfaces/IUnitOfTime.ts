interface IUnitOfTime {
  unit: "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "years";
  korean: string;
  time: number;
}

export default IUnitOfTime;
