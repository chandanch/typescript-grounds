/**
 *@description creating integer arrays and displaying the items of array
 *@author chandanch
 */
class Players {
    // Defining an array of type string
    private playerNames: string[] = [];
    //Defining an array of type string
    private playerIds: number[] = [];

    constructor(playerName: string, playerId: number) {
        this.playerIds.push(playerId);
        this.playerNames.push(playerName)
    }

    showPlayers() {
        let playerNames: string
        for (let i = 0; i < this.playerNames.length; i++) {
            playerNames = `${i}: ${this.playerNames[i]}`
        } 
        alert(`Player Names:\n ${this.playerNames}`);
        alert(`Player IDs: ${this.playerIds}`)
    }
}
var john = new Players('John', 12);
var peter = new Players('Peter', 23);
peter.showPlayers();

