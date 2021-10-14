function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return character;
}

function saveReview(review, listOfReviews) {
  if (listOfReviews.includes(review)) {
    return;
  } else {
    listOfReviews.push(review);
  }
}

function calculatePageCount(bookTitle) {
  var pageCount = (20 * bookTitle.length);
  return pageCount;
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    genre: genre,
    pageCount: calculatePageCount(title),
  };
  return book;
}

function editBook(book) {
  book.pageCount -= (book.pageCount * 0.25);
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
