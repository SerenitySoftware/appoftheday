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

  return Date.UTC(year, month, day);
}

export {
  convertToDate,
  getDateSlug,
}
