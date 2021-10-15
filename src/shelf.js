function shelfBook(book, specificShelf) {
  if (specificShelf.length < 3) {
    specificShelf.unshift(book);
  }
}

function unshelfBook(titleOfBook, specificShelf) {
  for (var i = 0; i < specificShelf.length; i++) {
    if (specificShelf[i].title === titleOfBook) {
      specificShelf.splice(i, 1);
    }
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
