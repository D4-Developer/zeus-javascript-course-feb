'use-strict'
// // ::::: #1

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
    ],
    score: '4:0',
    scored: [
        'Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
};

// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// const [gk1, ...filedPlayers1] = players1;
// console.log(gk1);
// const [gk2, ...filedPlayers2] = players2;
// console.log(gk2);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers.length);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const {team1 , x:draw, team2} = game.odds;
// console.log(team1, draw, team2);

// function printGoals(...receivedPlayers) {
//     console.log(receivedPlayers);
//     console.log(`${receivedPlayers.length} goals were scored`);    
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');


// //// :::: #2

// 1)
for (const [index, playerName] of game.scored.entries()) 
    console.log(`Goal ${1 + index}: ${playerName}`);

// 2) 
let totalOdd = 0;
const odds = Object.values(game.odds);
for (const odd of odds)
    totalOdd += odd;

console.log(totalOdd /= odds.length);

// 3)
for (const [teamName ,oddValue] of Object.entries(game.odds)) {
    const teamStr = game[teamName] ? `Victory ${game[teamName]}` : 'Draw';
    console.log(`Odd of ${teamStr}: ${oddValue}`);
}

// 4)
const scorers = {};

for (player of game.scored)
    scorers[player] = scorers[player] + 1 ||  1;

console.log(scorers);