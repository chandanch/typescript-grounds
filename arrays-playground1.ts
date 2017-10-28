/**
 *@description creating an empty array and displaying the items of array
 @author chandach
 */
class Players {
    // Creates a variable with an empty array
    private playersList = [];

    addplayer(playerName: string) {
        this.playersList.push(playerName);
    }

    showPlayers() {
        let playerNames: string
        for (let i = 0; i < this.playersList.length; i++) {
            playerNames = `${i}: ${this.playersList[i]}`
        } 
        alert(`Players:\n ${this.playersList}`);
    }
}
var player = new Players();
player.addplayer('Sam');
player.addplayer('Jack');
player.addplayer('Simon');
player.showPlayers();
