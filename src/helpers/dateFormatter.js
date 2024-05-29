import { format, parseISO } from "date-fns";

const formatDateForInput = (date) => {
  return format(date, "yyyy-MM-dd");
};

const parseDateFromInput = (dateString) => {
  return parseISO(dateString);
};

const dueOnMonthStringDate = (date) => {
  return `Due on ${format(date, "MMMM do, yyyy")}`;
};

export {
  formatDateForInput,
  parseDateFromInput,
  dueOnMonthStringDate,
};