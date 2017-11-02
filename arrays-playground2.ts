/**
 *@description creating integer arrays and displaying the items of array
 *@author chandanch
 */
class Players {
    // Defining an array of type string
    private playerNames: string[] = [];
    //Defining an array of type string
    private playerIds: number[] = [];

    constructor(playerRanks: string[]) {
        alert(playerRanks);
    }

    showPlayers() {
        let playerNames: string
        for (let i = 0; i < this.playerNames.length; i++) {
            playerNames = `${i}: ${this.playerNames[i]}`
        } 
        alert(`Player Names:\n ${this.playerNames}`);
        alert(`Player IDs: ${this.playerIds}`)
    }

    addplayerDetails(name: string, id: number) {
        this.playerIds.push(id);
        this.playerNames.push(name);
    }
}

var ranks = ['vital', 'benificiary', 'substitute'];
var players = new Players(ranks);
players.addplayerDetails('John', 12);
players.addplayerDetails('Joseph', 13);
players.addplayerDetails('Ken', 34);

players.showPlayers();



