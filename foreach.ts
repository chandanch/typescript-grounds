/**
 * @description usage of forEach
 * @author chandanch
 */

// access the foreach method
var foreach = Array.prototype.forEach;
var playerNames = ['sam', 'john', 'peter', 'katch', 'drew'];
// using foreach
foreach.call(playerNames, (playerName) => {
    console.log(playerName);
});

