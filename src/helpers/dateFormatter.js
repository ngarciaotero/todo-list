import { differenceInDays, format, parseISO } from "date-fns";

const formatDateForInput = (date) => {
  return format(date, "yyyy-MM-dd");
};

const parseDateFromInput = (dateString) => {
  return parseISO(dateString);
};

const dueOnMonthStringDate = (date) => {
  return `Due on ${format(date, "MMMM do, yyyy")}`;
};

const dueInDaysString = (dueDate) => {
  const today = new Date();
  const daysUntilDue = differenceInDays(dueDate, today);

  if (daysUntilDue > 0) {
    return `Due in ${daysUntilDue} days`;
  } else if (daysUntilDue === 0) {
    return `Due today`;
  } else {
    return `Overdue by ${Math.abs(daysUntilDue)} days`;
  }
};

export {
  formatDateForInput,
  parseDateFromInput,
  dueOnMonthStringDate,
  dueInDaysString,
};
