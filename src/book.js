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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
