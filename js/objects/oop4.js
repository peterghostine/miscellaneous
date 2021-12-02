class Media {
  constructor(title) {
    this._title  = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  set isCheckedOut(checkOutStatus) {
    this._isCheckedOut = checkOutStatus;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  getAverageRating() {
    return this._ratings.reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  addRating (newRating) {
    this._ratings.push(newRating);
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTimepages;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

console.log (`Title: ${historyOfEverything.title}`);
console.log (`Pages: ${historyOfEverything.pages}`);
console.log (`Checkout status: ${historyOfEverything.isCheckedOut}`);
historyOfEverything.isCheckedOut = true;
console.log (`Checkout status: ${historyOfEverything.isCheckedOut}`);
historyOfEverything.toggleCheckOutStatus();
console.log (`Checkout status: ${historyOfEverything.isCheckedOut}`);
historyOfEverything.addRating(3);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
console.log (`Average rating: ${historyOfEverything.getAverageRating()}`);

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log (speed.getAverageRating());
