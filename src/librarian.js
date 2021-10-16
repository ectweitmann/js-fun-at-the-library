class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(name, isMorning) {
    if (isMorning) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }
  findBook(title) {
    if (this.library.shelves.fantasy[0].title === title) {
      this.library.shelves.fantasy.splice(0, 1);
      return `Yes, we have ${title}`;
    } else {
      return `Sorry, we do not have ${title}`;
    }
  }
  calculateLateFee(daysOverdue) {
    return Math.ceil(daysOverdue * 0.25);
  }
}

module.exports = Librarian;
