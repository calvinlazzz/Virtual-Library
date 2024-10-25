// import the Media class:

const Media = require("./Media");

// create your Music class:
class Music extends Media {
    constructor(title, year, genre, artist , length, rating) {
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }

    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }

    static shortestAlbum(musics) {
        return musics.reduce((shortest, music) => music.length < shortest.length ? music : shortest, musics[0]);
    }
}
// don't change below
module.exports = Music;
