function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
}

function addBook(library, book) {
  var properShelf = book.genre;
  if (properShelf === "fantasy") {
    library.shelves.fantasy.push(book);
  } else if (properShelf === "fiction") {
    library.shelves.fiction.push(book);
  } else if (properShelf === "nonFiction") {
    library.shelves.nonFiction.push(book);
  }
}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
