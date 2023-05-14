const team = {
    _players: [
      {
        firstName: 'Peppa',
        lastName: 'Pig',
        age: 5
      },
      {
        firstName: 'Hades',
        lastName: 'Tyler',
        age: 7
      },
      {
        firstName: 'Taylor',
        lastName: 'Buds',
        age: 49
        }
    ],
    _games: [
      {
        opponent: 'Dummies',
        teamPoints: 30,
        opponentPoints: 6
      },
      {
        opponent: 'Nothing',
        teamPoints: 10,
        opponentPoints: 35
      },
      {
        opponent: 'Smart',
        teamPoints: 13,
        opponentPoints: 6
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName, 
        lastName: lastName, 
        age: age
      };
      this.players.push(player);
    },
      addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent, 
        teamPoints: teamPoints, 
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    }
  }

  team.addPlayer('Mary', 'Reshi', 38);
  team.addPlayer('Plearn', 'Bao', 77);
  team.addPlayer('Nat', 'Grimes', 66);

  console.log(team._players);

  team.addGame('Smarties', 5, 3);
  team.addGame('Dumbies', 5, 15);
  team.addGame('Smartdumb', 7, 14);

  console.log(team._games);