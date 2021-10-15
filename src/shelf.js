function shelfBook(book, specificShelf) {
  if (specificShelf.length < 3) {
    specificShelf.unshift(book);
  }
}

module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
