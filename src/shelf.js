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

function listTitles(specificShelf) {
  var listOfTitles = "";
  for (var i = 0; i < specificShelf.length; i++) {
    if (i !== specificShelf.length-1) {
      listOfTitles += specificShelf[i].title + ", ";
    } else {
      listOfTitles += specificShelf[i].title;
    }
  }
  return listOfTitles;
}

function searchShelf(specificShelf, titleOfBook) {
  var hasBook = false;
  for (var i = 0; i < specificShelf.length; i++) {
    if (specificShelf[i].title === titleOfBook) {
      hasBook = true;
      return hasBook;
    } else {
      hasBook = false;
    }
  }
  return hasBook;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
