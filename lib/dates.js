function getDateSlug(date) {
  const slugifiedDate = date || new Date();
  const year = slugifiedDate.getUTCFullYear();
  const month = (slugifiedDate.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = slugifiedDate.getUTCDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function convertToDate(slug) {
  const dateParts = slug.split("-");
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const day = parseInt(dateParts[2], 10);

  return new Date(year, month, day);
}

function formatDateSlug(slug) {
  const date = convertToDate(slug);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
  ];

  const formattedYear = year.toString();
  const formattedMonth = months[month].toString();
  const formattedDay = day.toString() + ordinal(day);

  return `${formattedMonth} ${formattedDay}, ${formattedYear}`;
}

function ordinal(day) {
  const remainder = day % 10;
  switch (remainder) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export {
  convertToDate,
  formatDateSlug,
  getDateSlug,
}
