import moment from "moment";

export const toDateNorm = (item: number | undefined) => {
  return item
    ? moment(item * 1000)
        .format("YYYY-MM-DD HH:mm:ss")
        .toString()
    : null;
};
