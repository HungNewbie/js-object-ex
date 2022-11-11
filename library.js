class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
    
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    set isCheckedOut(CheckedOrNot) {
      this._isCheckedOut = CheckedOrNot;
    }
      get ratings() {
      return this._ratings;
    }
    
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  // Average rating based on the number inside ratings array. reduce() method is for calculate the sum.
    getAverageRating() {
      let ratingLength = this.ratings.length;
      let average = this.ratings.reduce((sum, rating) => {
        return (sum + rating);
       }, 0);
       return average / ratingLength;
    }
    addRating(newRating) {
      if (newRating > 0 || newRating < 6) {
      this.ratings.push(newRating);
    }
    else {
      console.log('Error: rating must be between 1 and 5');
    }
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
    get page() {
      return this._page;
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
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(artist, title) {
      super(title);
      this._artist = artist;
      this._songs = [];
    } 
    
    get artist () {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
    addSong(newSong) {
      this.songs.push(newSong);
    }
    // Randomly shuffle the songs inside songs array.
      shuffle() {
      for (let i = this._songs.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this._songs[i], this._songs[j]] = [this._songs[j], this._songs[i]];
      }
      return (this._songs);
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  const test = new CD('Unknown', 'Country Song');
  test.addSong('song #1');
  test.addSong('song #2');
  test.addSong('song #3');
  test.addSong('song #4');
  console.log(test.shuffle())
  
  