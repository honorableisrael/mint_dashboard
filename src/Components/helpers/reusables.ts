const moment = require("moment");



export const formatTime = (date) => {
  if (date) {
    const dateTime = moment(date).format("Do MMM YYYY");
    return dateTime;
  } else {
    return "";
  }
};
