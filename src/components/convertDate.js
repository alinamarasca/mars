const convertDate = date => {
  // return date.toISOString().split("T")[0];
  return (
    date.getFullYear() + "-" + (+date.getMonth() + 1) + "-" + date.getDate()
  );
};

export default convertDate;
