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
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book);
  } else if (book.genre === "fiction") {
    library.shelves.fiction.push(book);
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book);
  }
}

function checkoutBook(library, title, genre) {
  if (genre === "fantasy" && library.shelves.fantasy.length > 0) {
    library.shelves.fantasy.splice(0, 1);
    return `You have now checked out ${title} from the ${library.name}`;
  } else if (genre === "fiction" && library.shelves.fiction.length > 0) {
    library.shelves.fiction.splice(0, 1);
    return `You have now checked out ${title} from the ${library.name}`;
  } else if (genre === "nonFiction" && library.shelves.nonFiction.length > 0) {
    library.shelves.nonFiction.splice(0, 1);
    return `You have now checked out ${title} from the ${library.name}`;
  } else {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
