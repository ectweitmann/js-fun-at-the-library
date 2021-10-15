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

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};
