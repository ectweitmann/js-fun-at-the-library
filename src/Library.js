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

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};
