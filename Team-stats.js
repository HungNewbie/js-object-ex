const team = {
    //Add three players inside _players array
    _players: [{firstName: 'Katsuya', lastName: 'Jonouchi', age: 15}, {firstName: 'Seto', lastName: 'Kaiba', age: 16}, {firstName: 'Yugi', lastName: 'Mutou', age: 15}],
    //Add three games inside _games array
    _games: [{opponent: 'Marik', teamPoints: 99, opponentPoints: 98}, {opponent: 'Mai', teamPoints: 90, opponentPoints: 89}, {opponent: 'Haga', teamPoints: 109, opponentPoints: 100}],
    get players() {
      //Retrieve _players property
      return this._players;
    },
      get games() {
        //Retrive _games property
      return this._games;
    },
    //Add a new method name .addPlayer() with three parameters
  addPlayer(newFirstName, newLastName, newAge) {
    //Create a player object
  let player = {firstName: newFirstName, lastName: newLastName, age: newAge};
  //Add the player object to the team‘s _players array using push() method.
  this._players.push(player);
    },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
    this._games.push(game);
  }
  }
  team.addPlayer('Hiroto', 'Honda', 15);
  console.log(team._players);
  team.addGame('Ryuzaki', 105, 102);
  console.log(team._games);
  