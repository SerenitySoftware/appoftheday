function getDateSlug(date) {
  const slugifiedDate = date || new Date();
  const year = slugifiedDate.getUTCFullYear();
  const month = (slugifiedDate.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = slugifiedDate.getUTCDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export {
  getDateSlug,
}
