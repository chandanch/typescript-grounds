/**
 *@description This playground covers the usage of constant
 * variables using the `const` keyword
 */
class Actor {
    constructor() {
    }
    getActorName() {
        const actorName = "David";
        // This does not work since actor name is constant or read-only 
        // actorName = "fisher";
        return actorName;
    }
    moviesList() {
        const movies: string[] = ["First man", "The day", "The goat"];
        movies.push("goas");
        // Even this does not work
        // movies = ["faster","goay"];
    }
}

var actor = new Actor();
actor.getActorName();
actor.moviesList();
